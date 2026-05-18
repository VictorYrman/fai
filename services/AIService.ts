// Services
import { calculateBMI } from "./HealthService";

// Store
import { ProfileType } from "@/store/useProfileStore";

const createRAGForAI = (exercises: any, profile: ProfileType) => {
  const BMI = calculateBMI(profile.weight, profile.height);
  const filteredExercises =
    BMI > 25
      ? exercises.filter(
          (exercise: any) => exercise.jointLoad?.value !== "high",
        )
      : exercises;

  const levelsWeight: Record<string, number> = {
    beginner: 1,
    intermediate: 2,
    advanced: 3,
  };

  const userLevelWeight = levelsWeight[profile.level] || 1;

  const rag = filteredExercises.filter((exercise: any) => {
    const matchedGoal = exercise.goals?.some(
      (goal: any) => goal?.value === profile.goal,
    );

    const exerciseLevelValue = exercise.difficultyLevel?.value;
    const exerciseLevelWeight = levelsWeight[exerciseLevelValue] || 1;

    const matchedLevel = exerciseLevelWeight <= userLevelWeight;

    return matchedGoal && matchedLevel;
  });

  return rag;
};

const getWarmupExercises = (exercises: any) => {
  const warmup = exercises.filter(
    (exercise: any) => exercise.exerciseCategory?.value === "warmup",
  );
  return warmup;
};

const getBaseExercises = (exercises: any) => {
  const base = exercises.filter(
    (exercise: any) =>
      exercise.exerciseCategory?.value === "strength" ||
      exercise.exerciseCategory?.value === "cardio" ||
      exercise.exerciseCategory?.value === "stretch",
  );
  return base;
};

const createPromptForAI = (exercises: any, profile: ProfileType) => {
  const warmup = getWarmupExercises(exercises);
  const base = getBaseExercises(exercises);

  let prompt = `Данные анкеты пользователя: Пол: ${profile.gender}; Возраст: ${profile.age}; Рост: ${profile.height}; Вес: ${profile.weight}; Цель: ${profile.goal}; Уровень подготовки: ${profile.level}. 
    На основе этих целей и уровня подготовки, составь недельный план тренировок. 
    Выходной JSON должен содержать массив "days", где каждый элемент — это тренировочный день.
    // Выходной JSON должен содержать массив "days", где каждый элемент — это тренировочный день. Разминка (warmup) и заминка (cooldown) состоят строго из упражнений, входящих в следующую базу упражнений: ${warmup.map((exercise: any) => `ID упражнения: ${exercise.id}; Название упражнения: ${exercise.name}.\n; Статичное упражнение: ${exercise.isStatic}\n}`)}, в разминку входят упражнения, на все тело (все группы мышцы, для разминки всего тела), а в заминку упражнения только для тех мышц, которые задействованы в основных упражнениях. Основные упражнения (base) нужно брать из следующей базе:  ${base.map((exercise: any) => `ID упражнения: ${exercise.id}; Название упражнения: ${exercise.name}.\n; Статичное упражнение: ${exercise.isStatic}\n;`)}.
    Учитывай ещё распределение основных упражнений, если цель похудение, то больше упражнений на кардио, если набор мышечной массы - силовые, если тонус и здоровье - баланс. Упражнения должны отличаться в разные дни (можешь повторяться, но не два тренировочных дня подряд, это касается разминки, основных упражнений и заминки). Не должны основные упражнения быть в разминке или заминке и наоборот. Делай строго по моему описанию!`;

  if (profile.level === "beginner") {
    prompt +=
      "Стиль тренировок (сплит): Full-body. Количество тренировочных дней: 2. Отдых между днями составляет примерно 2-3 дня. 4 или 5 основных упражнения.";
  } else if (profile.level === "intermediate") {
    prompt +=
      "Стиль тренировок (сплит): Push, Pull, Legs. Количество тренировочных дней 3. Отдых между днями составляет примерно 2 дня. 5 или 6 основных упражнений.";
  } else if (profile.level === "advanced") {
    prompt +=
      "Стиль тренировок (сплит): Upper, Lower. Количество тренировочных дней 4. Отдых между днями составляет примерно 1-2 дня. 6 основных упражнений.";
  }

  return prompt;
};

export const generateAIProgram = async (
  exercises: any,
  profile: ProfileType,
) => {
  const rag = createRAGForAI(exercises, profile);
  const prompt = createPromptForAI(rag, profile);

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.EXPO_PUBLIC_GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          response_format: { type: "json_object" },
          messages: [
            {
              role: "system",
              content: `Ты — профессиональный фитнес-ассистент. Твоя задача генерировать программы тренировок и адаптировать их строго в формате JSON.
                        Правила для упражнений:
                        - Если упражнение динамическое (isStatic = false), используй "reps" (количество повторений);
                        - Если упражнение статическое (isStatic = true), используй "duration" (в секундах);
                        - Дни должны быть на английском (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday);
                        - Структура объекта дня: { "day": string, "warmup": [...], "base": [...], "cooldown": [...] };
                        - Каждое упражнение должно содержать: exerciseId (id упражнения), reps (число) или duration (секунды), sets (число), rest (секунды).`,
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      },
    );

    const data = await response.json();

    if (data.error) {
      console.error(data.error.message);
      return;
    }

    const reply = data.choices[0].message.content;

    return reply;
  } catch (error) {
    console.error(error);
  }
};

export const generateAIResponse = async (prompt: string) => {
  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.EXPO_PUBLIC_GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: `Ты — профессиональный фитнес-ассистент. Ты можешь отвечать только на вопросы связанные с фитнесом, спортом, питанием и здоровьем.`,
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      },
    );

    const data = await response.json();

    if (data.error) {
      console.error(data.error.message);
      return;
    }

    const reply = data.choices[0].message.content;

    return reply;
  } catch (error) {
    console.error(error);
  }
};

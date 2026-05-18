// Atoms Components
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import GradientBackground from "@/components/atoms/GradientBackground";

// Molecules Components
import SurveyManager from "@/components/molecules/SurveyManager";
import AgePicker from "@/components/molecules/AgePicker";

// Organisms Components
import GoalPicker from "@/components/organisms/GoalPicker";
import LevelPicker from "@/components/organisms/LevelPicker";
import GenderPicker from "@/components/organisms/GenderPicker";
import HeightPicker from "@/components/organisms/HeightPicker";
import WeightPicker from "@/components/organisms/WeightPicker";

// External Dependencies
import PagerView from "react-native-pager-view";
import { useRouter } from "expo-router";
import { Alert, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useEffect, useRef, useState } from "react";

// Constants
import { Spacing } from "@/constants/theme";

// Services
import {
  areAllSurveyFieldsValid,
  isAgeValid,
  isGenderValid,
  isGoalValid,
  isHeightValid,
  isLevelValid,
  isWeightValid,
} from "@/services/ValidationService";
import { generateAIProgram } from "@/services/AIService";

// Storage
import { useAuthStore } from "@/store/useAuthStore";
import { useProfileStore } from "@/store/useProfileStore";
import { useProgramStore } from "@/store/useProgramStore";
import { useReferenceStore } from "@/store/useReferenceStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { SurveyStyles } from "@/styles/screens/Survey.styles";

export default function Survey() {
  const { user } = useAuthStore();
  const { profile, setField, updateProfile } = useProfileStore();
  const { program, setProgram } = useProgramStore();
  const { exercises } = useReferenceStore();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const HeaderHeight = useHeaderHeight();

  const pagerRef = useRef<PagerView>(null);
  const totalPages = 6;

  const PaddingTop = HeaderHeight + Spacing.long;

  useEffect(() => {
    if (loading) {
      Alert.alert(
        "Программа тренировок",
        loading
          ? "Формирование программы тренировок..."
          : "Программа тренировок сформирована!",
      );
    }
  }, [loading]);

  const onPrevious = () => {
    if (currentPage > 0) {
      pagerRef.current?.setPage(currentPage - 1);
    }
  };

  const onNext = () => {
    if (currentPage < totalPages - 1) {
      pagerRef.current?.setPage(currentPage + 1);
    }
  };

  const onClickCreateTrainingProgram = async () => {
    let errorMessage = "Пустые поля:";

    if (!isGenderValid(profile.gender)) {
      errorMessage += " gender;";
    }

    if (!isAgeValid(profile.age)) {
      errorMessage += " age;";
    }

    if (!isHeightValid(profile.height)) {
      errorMessage += " height;";
    }

    if (!isWeightValid(profile.weight)) {
      errorMessage += " weight;";
    }

    if (!isGoalValid(profile.goal)) {
      errorMessage += " goal;";
    }

    if (!isLevelValid(profile.level)) {
      errorMessage += " level;";
    }

    if (areAllSurveyFieldsValid(profile)) {
      errorMessage = "";
    }

    if (errorMessage) {
      errorMessage = errorMessage.slice(0, -1) + "!";
      Alert.alert("Survey", errorMessage);
    } else {
      try {
        setLoading(true);

        const response = await generateAIProgram(exercises, profile);
        const program = JSON.parse(response);

        setProgram(program);

        router.navigate("/demo");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const onClickSaveData = async () => {
    await updateProfile(profile);
    router.replace("/(tabs)/profile");
  };

  return (
    <GradientBackground
      style={[GlobalStyles.screen, { paddingTop: PaddingTop }]}
    >
      <Typography type="title" style={GlobalStyles.textCenter}>
        РАССКАЖИТЕ О СЕБЕ
      </Typography>

      <PagerView
        ref={pagerRef}
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={(event) => setCurrentPage(event.nativeEvent.position)}
      >
        <View key={"gender"} style={SurveyStyles.surveyContent}>
          <Typography type="paragraph" style={GlobalStyles.textCenter}>
            Какого вы пола?
          </Typography>

          <GenderPicker
            value={profile.gender}
            onSelect={(gender: string) => setField("gender", gender)}
          />
        </View>

        <View key={"age"} style={SurveyStyles.surveyContent}>
          <Typography type="paragraph" style={GlobalStyles.textCenter}>
            Сколько вам лет?
          </Typography>

          <AgePicker
            value={profile.age}
            onSelect={(age: number) => setField("age", age)}
          />
        </View>

        <View key={"height"} style={SurveyStyles.surveyContent}>
          <Typography type="paragraph" style={GlobalStyles.textCenter}>
            Какой у вас рост?
          </Typography>

          <HeightPicker
            value={profile.height}
            onSelect={(height: number) => setField("height", height)}
          />
        </View>

        <View key={"weight"} style={SurveyStyles.surveyContent}>
          <Typography type="paragraph" style={GlobalStyles.textCenter}>
            Какой у вас вес?
          </Typography>

          <WeightPicker
            value={profile.weight}
            onSelect={(weight: number) => setField("weight", weight)}
          />
        </View>

        <View key={"goal"} style={SurveyStyles.surveyContent}>
          <Typography type="paragraph" style={GlobalStyles.textCenter}>
            Какова ваша цель?
          </Typography>

          <GoalPicker
            value={profile.goal}
            onSelect={(goal: string) => setField("goal", goal)}
          />
        </View>

        <View key={"level"} style={SurveyStyles.surveyContent}>
          <Typography type="paragraph" style={GlobalStyles.textCenter}>
            Каков ваш уровень подготовки?
          </Typography>

          <LevelPicker
            value={profile.level}
            onSelect={(level: string) => setField("level", level)}
          />
        </View>
      </PagerView>

      {currentPage !== totalPages - 1 ? (
        <SurveyManager
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      ) : !user && !program ? (
        <Button type="gradient" onPress={onClickCreateTrainingProgram}>
          <Typography type="key" style={GlobalStyles.textDark}>
            СОЗДАТЬ ПРОГРАММУ
          </Typography>
        </Button>
      ) : (
        <Button type="gradient" onPress={onClickSaveData}>
          <Typography type="key" style={GlobalStyles.textDark}>
            СОХРАНИТЬ ДАННЫЕ
          </Typography>
        </Button>
      )}
    </GradientBackground>
  );
}

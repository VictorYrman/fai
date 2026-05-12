// Molecules Components
import Input from "../molecules/Input";
import ModalLayout from "../molecules/ModalLayout";

// Organisms Components
import Filter, { FilterValueType } from "./Filter";
import ExerciseCard from "./ExerciseCard";

// External Dependencies
import { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";

// Store
import { useReferenceStore } from "@/store/useReferenceStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

// Props Type
type ExerciseCategoryModalProps = {
  exerciseCategory: any;
  visible: boolean;
  onClose: () => void;
};

const DefaultFilterValueMuscles: FilterValueType = {
  value: "",
  title: "Все мышцы",
  image: { man: "", woman: "" },
};

const ExerciseCategoryModal = ({
  exerciseCategory,
  visible,
  onClose,
}: ExerciseCategoryModalProps) => {
  const { muscleCategories, exercises } = useReferenceStore();
  const [search, setSearch] = useState<string>("");
  const [muscleCategory, setMuscleCategory] = useState<FilterValueType>(
    DefaultFilterValueMuscles,
  );

  const MuscleCategories = useMemo(() => {
    const base = [DefaultFilterValueMuscles];
    const fromStore = muscleCategories.map((muscleCategory) => ({
      value: muscleCategory?.value,
      title: muscleCategory?.name,
      image: muscleCategory?.image,
    }));

    return [...base, ...fromStore];
  }, [muscleCategories]);

  const filteredExercises = useMemo(() => {
    return exercises.filter((exercise) => {
      const matchedExerciseCategory =
        exercise?.exerciseCategory?.value === exerciseCategory?.value;
      const matchedName = exercise?.name
        .toLowerCase()
        .includes(search.toLowerCase());

      let matchedMuscleCategory = true;
      if (muscleCategory.value !== "") {
        matchedMuscleCategory = exercise?.muscleCategories.some(
          (mCategory) =>
            mCategory.muscleCategory?.value === muscleCategory.value &&
            mCategory.isPrimary,
        );
      }

      return matchedExerciseCategory && matchedName && matchedMuscleCategory;
    });
  }, [exercises, search, muscleCategory, exerciseCategory]);

  return (
    <ModalLayout visible={visible} onClose={onClose}>
      <View style={[GlobalStyles.contentGap, { flex: 1 }]}>
        <View style={GlobalStyles.elementsGap}>
          <Input
            value={search}
            icon="search"
            placeholder="Введите название..."
            onChange={(value) => setSearch(value)}
          />

          <Filter
            value={muscleCategory}
            muscleCategoryValues={MuscleCategories}
            onSelect={(value) => setMuscleCategory(value)}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={GlobalStyles.contentGap}>
            {filteredExercises.map((exercise) => (
              <ExerciseCard key={exercise?.id} exercise={exercise} />
            ))}
          </View>
        </ScrollView>
      </View>
    </ModalLayout>
  );
};

export default ExerciseCategoryModal;

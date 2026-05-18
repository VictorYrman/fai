// Molecules Components
import Input from "../molecules/Input";
import ModalLayout from "../molecules/ModalLayout";

// Organisms Components
import Filter, { SelectValueType } from "./Filter";
import ExerciseCard from "./ExerciseCard";

// External Dependencies
import { useMemo, useState } from "react";
import { FlatList, View } from "react-native";

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

const DefaultFilterValueMuscles: SelectValueType = {
  value: "",
  title: "Все мышцы",
};

const ExerciseCategoryModal = ({
  exerciseCategory,
  visible,
  onClose,
}: ExerciseCategoryModalProps) => {
  const { muscleCategories, exercises } = useReferenceStore();
  const [search, setSearch] = useState<string>("");
  const [muscleCategory, setMuscleCategory] = useState<SelectValueType>(
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
            selectValues={MuscleCategories}
            onSelect={(value) => setMuscleCategory(value)}
          />
        </View>

        <FlatList
          data={filteredExercises}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ExerciseCard exercise={item} />}
          contentContainerStyle={GlobalStyles.contentGap}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ModalLayout>
  );
};

export default ExerciseCategoryModal;

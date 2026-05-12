// Molecules Components
import ModalLayout from "../molecules/ModalLayout";
import ExerciseContent from "../molecules/ExerciseContent";

// Props Type
type ExerciseModalProps = {
  exercise: any;
  visible: boolean;
  onClose: () => void;
};

const ExerciseModal = ({ exercise, visible, onClose }: ExerciseModalProps) => {
  return (
    <ModalLayout visible={visible} onClose={onClose}>
      <ExerciseContent
        name={exercise?.name}
        video={exercise?.video}
        exerciseDescription={exercise?.description}
        muscleCategories={exercise?.muscleCategories}
        modalVisible={visible}
      />
    </ModalLayout>
  );
};

export default ExerciseModal;

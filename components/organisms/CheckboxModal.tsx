// Molecules Components
import ModalLayout from "../molecules/ModalLayout";

// Organisms Components
import CheckboxRow from "./CheckboxRow";

// External Dependencies
import { FlatList } from "react-native";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

type CheckboxValueType = {
  value: string;
  title: string;
};

// Props Type
type CheckboxModalProps = {
  values: string[];
  selectValues: CheckboxValueType[];
  visible: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
};

const CheckboxModal = ({
  values,
  selectValues,
  visible,
  onClose,
  onSelect,
}: CheckboxModalProps) => {
  return (
    <ModalLayout visible={visible} onClose={onClose}>
      <FlatList
        data={selectValues}
        keyExtractor={(item) => item.value}
        renderItem={({ item }) => (
          <CheckboxRow
            value={item.value}
            title={item.title}
            isSelected={values.includes(item.value)}
            onSelect={onSelect}
          />
        )}
        contentContainerStyle={GlobalStyles.contentGap}
        showsVerticalScrollIndicator={false}
      />
    </ModalLayout>
  );
};

export default CheckboxModal;

// Molecules Components
import ModalLayout from "../molecules/ModalLayout";

// Organisms Components
import { SelectValueType } from "./Filter";

// External Dependencies
import { FlatList } from "react-native";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import SelectableRow from "./SelectableRow";

// Props Type
type FilterModalProps = {
  values: SelectValueType[];
  selectedValue: string;
  visible: boolean;
  onClose: () => void;
  onSelect: (value: SelectValueType) => void;
};

const SelectModal = ({
  values,
  selectedValue,
  visible,
  onClose,
  onSelect,
}: FilterModalProps) => {
  return (
    <ModalLayout visible={visible} onClose={onClose}>
      <FlatList
        data={values}
        keyExtractor={(item) => item.value}
        renderItem={({ item }) => (
          <SelectableRow
            key={item.value}
            item={item}
            isSelected={item.value === selectedValue}
            onPress={() => {
              onSelect(item);
            }}
          />
        )}
        contentContainerStyle={GlobalStyles.contentGap}
        showsVerticalScrollIndicator={false}
      />
    </ModalLayout>
  );
};

export default SelectModal;

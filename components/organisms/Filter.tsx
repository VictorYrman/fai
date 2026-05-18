// Atoms Components
import Typography from "../atoms/Typography";

// Organisms Components
import SelectModal from "./SelectModal";

// External Dependencies
import { useState } from "react";
import { Pressable } from "react-native";

// Styles
import { FilterStyles } from "@/styles/components/organisms/Filter.styles";

// Filter Value Type
export type SelectValueType = {
  value: string;
  title: string;
  image?: {
    man?: string;
    woman?: string;
  };
};

// Props Type
type FilterProps = {
  value: SelectValueType;
  selectValues: SelectValueType[];
  onSelect: (value: SelectValueType) => void;
};

const Filter = ({ value, selectValues, onSelect }: FilterProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <Pressable
        onPress={() => setIsModalVisible(true)}
        style={FilterStyles.filter}
      >
        <Typography type="key">{value.title}</Typography>
      </Pressable>

      {isModalVisible && (
        <SelectModal
          values={selectValues}
          selectedValue={value.value}
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          onSelect={onSelect}
        />
      )}
    </>
  );
};

export default Filter;

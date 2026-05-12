// Atoms Components
import Typography from "../atoms/Typography";

// Organisms Components
import FilterModal from "./FilterModal";

// External Dependencies
import { useState } from "react";
import { Pressable } from "react-native";

// Styles
import { FilterStyles } from "@/styles/components/atoms/Filter.styles";

// Filter Value Type
export type FilterValueType = {
  value: string;
  title: string;
  image: {
    man: string;
    woman: string;
  };
};

// Props Type
type FilterProps = {
  value: FilterValueType;
  muscleCategoryValues: FilterValueType[];
  onSelect: (value: FilterValueType) => void;
};

const Filter = ({ value, muscleCategoryValues, onSelect }: FilterProps) => {
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
        <FilterModal
          values={muscleCategoryValues}
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

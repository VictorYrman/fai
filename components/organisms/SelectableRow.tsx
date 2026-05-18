// Atoms Components
import Typography from "../atoms/Typography";

// Organisms Components
import { SelectValueType } from "./Filter";

// External Dependencies
import { Image } from "expo-image";
import { Pressable } from "react-native";

// Store
import { useProfileStore } from "@/store/useProfileStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { SelectableRowStyles } from "@/styles/components/organisms/SelectableRow.styles";

// Props Type
type SelectableRowProps = {
  item: SelectValueType;
  isSelected: boolean;
  onPress: () => void;
};

const SelectableRow = ({ item, isSelected, onPress }: SelectableRowProps) => {
  const { profile } = useProfileStore();

  const getImageSource = (image: SelectValueType["image"]) => {
    if (!image) return null;

    return profile.gender === "Female" ? image.woman : image.man;
  };

  return (
    <Pressable
      onPress={onPress}
      style={[
        SelectableRowStyles.selectableRow,
        isSelected && SelectableRowStyles.selectableRowSelected,
      ]}
    >
      {item.image && (
        <Image
          source={getImageSource(item.image)}
          style={SelectableRowStyles.selectableRowImage}
        />
      )}

      <Typography type="key" style={isSelected && GlobalStyles.textDark}>
        {item.title}
      </Typography>
    </Pressable>
  );
};

export default SelectableRow;

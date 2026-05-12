// Atoms Components
import Typography from "../atoms/Typography";
import { FilterValueType } from "../atoms/Filter";

// Organisms Components
import ModalLayout from "./ModalLayout";

// External Dependencies
import { Image } from "expo-image";
import { Pressable, View } from "react-native";

// Store
import { useSurveyStore } from "@/store/useSurveyStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { FilterModalStyles } from "@/styles/components/organisms/FilterModal.styles";

// Props Type
type FilterModalProps = {
  values: FilterValueType[];
  selectedValue: string;
  visible: boolean;
  onClose: () => void;
  onSelect: (value: FilterValueType) => void;
};

const FilterModal = ({
  values,
  selectedValue,
  visible,
  onClose,
  onSelect,
}: FilterModalProps) => {
  const { survey } = useSurveyStore();

  return (
    <ModalLayout visible={visible} onClose={onClose}>
      <View style={GlobalStyles.contentGap}>
        {values.map((item) => (
          <Pressable
            key={item.value}
            onPress={() => {
              onSelect(item);
              onClose();
            }}
            style={[GlobalStyles.rowAlignCenter, GlobalStyles.contentGap]}
          >
            {item.image && item.image?.man && item.image?.woman && (
              <Image
                source={
                  survey.gender === "Female"
                    ? item.image?.woman
                    : item.image?.man
                }
                style={FilterModalStyles.filterModalImage}
              />
            )}
            <Typography
              type="key"
              style={
                item.value === selectedValue ? GlobalStyles.textPrimary : null
              }
            >
              {item.title}
            </Typography>
          </Pressable>
        ))}
      </View>
    </ModalLayout>
  );
};

export default FilterModal;

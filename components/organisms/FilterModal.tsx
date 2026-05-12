// Atoms Components
import Typography from "../atoms/Typography";

// Molecules Components
import ModalLayout from "../molecules/ModalLayout";

// Organisms Components
import { FilterValueType } from "./Filter";

// External Dependencies
import { Image } from "expo-image";
import { Pressable, ScrollView, View } from "react-native";

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
      <ScrollView showsVerticalScrollIndicator={false}>
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
      </ScrollView>
    </ModalLayout>
  );
};

export default FilterModal;

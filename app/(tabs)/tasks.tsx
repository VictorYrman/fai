// Atoms Components
import Typography from "@/components/atoms/Typography";

// Organisms Components
import ScreenLayout from "@/components/organisms/ScreenLayout";

// External Dependencies
import { View } from "react-native";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export default function Tasks() {
  return (
    <ScreenLayout>
      <Typography type="title" style={GlobalStyles.textCenter}>
        ВАШИ ЗАДАНИЯ
      </Typography>
      <View></View>
    </ScreenLayout>
  );
}

// Atoms Components
import Typography from "@/components/atoms/Typography";

// Organisms Components
import ScreenLayout from "@/components/organisms/ScreenLayout";

// External Dependencies
import { View } from "react-native";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export default function Analytics() {
  return (
    <ScreenLayout>
      <Typography type="title" style={GlobalStyles.textCenter}>
        ВАША СТАТИСТИКА
      </Typography>
      <View></View>
    </ScreenLayout>
  );
}

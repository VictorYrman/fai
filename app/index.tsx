// Atoms Components
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import GradientBackground from "@/components/atoms/GradientBackground";

// External Dependencies
import { View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { Redirect, useRouter } from "expo-router";

// Constants
import { Spacing } from "@/constants/theme";

// Services
import { areAllFieldsValid } from "@/services/ValidationService";

// Store
import { useSurveyStore } from "@/store/useSurveyStore";
import { useReferenceStore } from "@/store/useReferenceStore";
import { useProgramStore } from "@/store/useProgramStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { WelcomeStyles } from "@/styles/screens/Welcome.styles";

export default function Index() {
  const { survey } = useSurveyStore();
  const { isReferenceDataLoaded } = useReferenceStore();
  const { program, isProgramLoaded } = useProgramStore();
  const router = useRouter();
  const HeaderHeight = useHeaderHeight();

  const PaddingTop = HeaderHeight + Spacing.long;

  if (!isProgramLoaded || !isReferenceDataLoaded) return null;

  if (program && areAllFieldsValid(survey)) {
    return <Redirect href="/(tabs)" />;
  }

  return (
    <GradientBackground
      style={[GlobalStyles.screen, { paddingTop: PaddingTop }]}
    >
      <View style={WelcomeStyles.welcomeContent}>
        <Typography type="title" style={GlobalStyles.textCenter}>
          ДОБРО ПОЖАЛОВАТЬ В FAI!
        </Typography>
        <Typography type="paragraph" style={GlobalStyles.textCenter}>
          Никаких спортзалов, переплат, персональных гуру и железок. FAI
          адаптируется под вас: под вашу цель, ваш график и ваше состояние прямо
          сейчас. Просто возьмите телефон и начните. Ваш путь с FAI уже в ваших
          руках.
        </Typography>
      </View>

      <Button type="gradient" onPress={() => router.navigate("/survey")}>
        <Typography type="key" style={GlobalStyles.textDark}>
          НАСТРОИТЬ ПОД СЕБЯ
        </Typography>
      </Button>
    </GradientBackground>
  );
}

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
import { useProgramStore } from "@/store/useProgramStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { WelcomeStyles } from "@/styles/screens/Welcome.styles";

export default function Index() {
  const { survey } = useSurveyStore();
  const { program, isLoaded } = useProgramStore();
  const router = useRouter();
  const HeaderHeight = useHeaderHeight();

  const PaddingTop = HeaderHeight + Spacing.long;

  if (!isLoaded) return null;

  if (program && areAllFieldsValid(survey)) {
    return <Redirect href="/(tabs)" />
  }

  return (
    <GradientBackground
      style={[GlobalStyles.screen, { paddingTop: PaddingTop }]}
    >
      <View style={WelcomeStyles.welcomeContent}>
        <Typography type="title">WELCOME TO FAI!</Typography>
        <Typography type="paragraph" style={GlobalStyles.textCenter}>
          No gyms, memberships, or complicated equipment. Just a phone and a
          desire, and you are already closer to your goal. FAI adapts to you,
          your goals, and your well-being.
        </Typography>
      </View>

      <Button type="gradient" onPress={() => router.navigate("/survey")}>
        <Typography type="key" style={GlobalStyles.textDark}>
          START THE JOURNEY!
        </Typography>
      </Button>
    </GradientBackground>
  );
}

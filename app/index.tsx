// Atoms Components
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import GradientBackground from "@/components/atoms/GradientBackground";

// External Dependencies
import { View } from "react-native";
import { useRouter } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { WelcomeStyles } from "@/styles/screens/Welcome.styles";

export default function Index() {
  const router = useRouter();
  const HeaderHeight = useHeaderHeight();
  
  const PaddingTop = HeaderHeight + Spacing.long;

  return (
    <GradientBackground
      style={[WelcomeStyles.welcome, { paddingTop: PaddingTop }]}
    >
      <View
        style={WelcomeStyles.welcomeContent}
      >
        <Typography type="title">WELCOME TO FAI!</Typography>
        <Typography
          type="paragraph"
          style={GlobalStyles.textCenter}
        >
          No gyms, memberships, or complicated equipment. Just a phone and a
          desire, and you are already closer to your goal. FAI adapts to you,
          your goals, and your well-being.
        </Typography>
      </View>

      <Button type="gradient" onPress={() => router.navigate("/survey")}>
        <Typography
          type="key"
          style={GlobalStyles.textDark}
        >
          START THE JOURNEY!
        </Typography>
      </Button>
    </GradientBackground>
  );
}

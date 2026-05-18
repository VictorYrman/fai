// Atoms Components
import GradientBackground from "../atoms/GradientBackground";

// Molecules Components
import Header from "../molecules/Header";

// External Dependencies
import { ScrollView, View } from "react-native";

// Store
import { useProfileStore } from "@/store/useProfileStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import FAIAssistant from "./FAIAssistant";

// Props Type
type ScreenLayoutProps = {
  children: React.ReactNode;
};

const ScreenLayout = ({ children }: ScreenLayoutProps) => {
  const { profile } = useProfileStore();

  return (
    <GradientBackground style={GlobalStyles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={GlobalStyles.contentGap}>
          <Header />
          {children}
        </View>
      </ScrollView>

      {profile.settings.isBotEnabled && <FAIAssistant />}
    </GradientBackground>
  );
};

export default ScreenLayout;

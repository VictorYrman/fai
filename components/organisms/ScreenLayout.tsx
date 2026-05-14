// Atoms Components
import GradientBackground from "../atoms/GradientBackground";

// Molecules Components
import Header from "../molecules/Header";

// External Dependencies
import { ScrollView, View } from "react-native";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

// Props Type
type ScreenLayoutProps = {
  children: React.ReactNode;
};

const ScreenLayout = ({ children }: ScreenLayoutProps) => {
  return (
    <GradientBackground style={GlobalStyles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={GlobalStyles.contentGap}>
          <Header />
          {children}
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default ScreenLayout;

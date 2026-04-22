// Atoms Components
import GradientBackground from "@/components/atoms/GradientBackground";
import Typography from "@/components/atoms/Typography";

// External Dependencies
import { View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export default function Home() {
    const HeaderHeight = useHeaderHeight();

    return (
        <GradientBackground style={[GlobalStyles.screen, { paddingTop: HeaderHeight }]}>
            <Typography type="title" style={GlobalStyles.textCenter}>WELCOME BACK!</Typography>
            <View></View>
        </GradientBackground>
    );
};
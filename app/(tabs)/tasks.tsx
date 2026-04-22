// Atoms Components
import Typography from "@/components/atoms/Typography";
import GradientBackground from "@/components/atoms/GradientBackground";

// External Dependencies
import { View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export default function Tasks() {
    const HeaderHeight = useHeaderHeight();

    return (
        <GradientBackground style={[GlobalStyles.screen, { paddingTop: HeaderHeight }]}>
            <Typography type="title" style={GlobalStyles.textCenter}>YOUR TASKS</Typography>
            <View></View>
        </GradientBackground>
    );
};
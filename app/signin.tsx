// Atoms Components
import Icon from "@/components/atoms/Icon";
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import GradientBackground from "@/components/atoms/GradientBackground";

// External Dependencies
import { View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { SignInStyles } from "@/styles/screens/SignIn.styles";

export default function SignIn() {
    const HeaderHeight = useHeaderHeight();

    const PaddingTop = HeaderHeight + Spacing.long;

    return (
        <GradientBackground style={[SignInStyles.signIn, { paddingTop: PaddingTop }]}>
            <View style={SignInStyles.signInContent}>
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

            <View style={SignInStyles.signInContent}>
                <Button type="google" onPress={() => {}}>
                    <Icon icon="google" />
                    <Typography type="key" style={GlobalStyles.textDark}>CONTINUE WITH GOOGLE</Typography>
                </Button>

                <Button type="gradient" onPress={() => {}}>
                    <Icon icon="guest" />
                    <Typography type="key" style={GlobalStyles.textDark}>CONTINUE AS A GUEST</Typography>
                </Button>
            </View>
        </GradientBackground>
    );
};
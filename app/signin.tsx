// Atoms Components
import Icon from "@/components/atoms/Icon";
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import GradientBackground from "@/components/atoms/GradientBackground";

// External Dependencies
import { View } from "react-native";
import { useRouter } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";

// Constants
import { Colors, Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { SignInStyles } from "@/styles/screens/SignIn.styles";

export default function SignIn() {
    const router = useRouter();
    const HeaderHeight = useHeaderHeight();

    const PaddingTop = HeaderHeight + Spacing.long;

    const onClickGoogleHandler = () => {
        router.navigate("/(tabs)");
    };

    const onClickGuestHandler = () => {
        router.navigate("/(tabs)");
    };

    return (
        <GradientBackground style={[GlobalStyles.screen, { paddingTop: PaddingTop }]}>
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
                <Button type="google" onPress={onClickGoogleHandler}>
                    <Icon icon="google" />
                    <Typography type="key" style={GlobalStyles.textDark}>CONTINUE WITH GOOGLE</Typography>
                </Button>

                <View style={{
                    ...GlobalStyles.elementsGap,
                    width: "100%"
                }}>
                    <Button type="gradient" onPress={onClickGuestHandler}>
                        <Icon icon="guest" color={Colors.dark} />
                        <Typography type="key" style={GlobalStyles.textDark}>CONTINUE AS A GUEST</Typography>
                    </Button>
                    <Typography type="small" style={[GlobalStyles.textCenter, GlobalStyles.textItalic]}>Guest - data is stored only on this phone. It will be lost when you change devices.</Typography>
                </View>
            </View>
        </GradientBackground>
    );
};
// Atoms Components
import Icon from "@/components/atoms/Icon";
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import GradientBackground from "@/components/atoms/GradientBackground";

// External Dependencies
import { View } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useHeaderHeight } from "@react-navigation/elements";
import {
  signInWithCredential,
  signInAnonymously,
  GoogleAuthProvider,
} from "@react-native-firebase/auth";

// Config
import { auth } from "@/config/firebase";
import { configureGoogleSignIn } from "@/config/google";

// Constants
import { Colors, Spacing } from "@/constants/theme";

// Store
import { useAuthStore } from "@/store/useAuthStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { SignInStyles } from "@/styles/screens/SignIn.styles";

export default function SignIn() {
  const { setUser } = useAuthStore();
  const router = useRouter();
  const HeaderHeight = useHeaderHeight();

  const PaddingTop = HeaderHeight + Spacing.long;

  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  const onClickGoogleHandler = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { data } = await GoogleSignin.signIn();

      if (!data?.idToken) return;

      const googleCredential = GoogleAuthProvider.credential(data.idToken);
      const userCredential = await signInWithCredential(auth, googleCredential);
      setUser(userCredential.user);

      router.replace("/(tabs)");
    } catch (error) {
      console.error(error);
    }
  };

  const onClickGuestHandler = async () => {
    try {
      const userCredential = await signInAnonymously(auth);
      setUser(userCredential.user);

      router.replace("/(tabs)");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GradientBackground
      style={[GlobalStyles.screen, { paddingTop: PaddingTop }]}
    >
      <View style={SignInStyles.signInContent}>
        <Typography type="title" style={GlobalStyles.textCenter}>
          СОЗДАЙТЕ АККАУНТ FAI!
        </Typography>
        <Typography type="paragraph" style={GlobalStyles.textCenter}>
          Войдите в аккаунт, чтобы ваши тренировки, прогресс и достижения всегда
          были с вами. Сохраните созданную программу, не потеряйте её при смене
          телефона и возвращайтесь к тренировкам в любой момент.
        </Typography>
      </View>

      <View style={SignInStyles.signInContent}>
        <Button type="google" onPress={onClickGoogleHandler}>
          <Icon icon="google" />
          <Typography type="key" style={GlobalStyles.textDark}>
            ВОЙТИ ЧЕРЕЗ GOOGLE
          </Typography>
        </Button>

        <View
          style={{
            ...GlobalStyles.elementsGap,
            width: "100%",
          }}
        >
          <Button type="gradient" onPress={onClickGuestHandler}>
            <Icon icon="guest" color={Colors.dark} />
            <Typography type="key" style={GlobalStyles.textDark}>
              ВОЙТИ КАК ГОСТЬ
            </Typography>
          </Button>
          <Typography
            type="small"
            style={[GlobalStyles.textCenter, GlobalStyles.textItalic]}
          >
            Гостевые данные хранятся только на этом телефоне. Они будут потеряны
            при смене устройства.
          </Typography>
        </View>
      </View>
    </GradientBackground>
  );
}

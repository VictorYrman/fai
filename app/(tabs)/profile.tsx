// Atoms Components
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";

// Organisms Components
import ScreenLayout from "@/components/organisms/ScreenLayout";
import ProfileSummary from "@/components/organisms/ProfileSummary";

// External Dependencies
import { View } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

// Config
import { configureGoogleSignIn } from "@/config/google";

// Store
import { useAuthStore } from "@/store/useAuthStore";
import { useProfileStore } from "@/store/useProfileStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export default function Profile() {
  const { user, isAnonymous } = useAuthStore();
  const { getProfile } = useProfileStore();
  const router = useRouter();

  useEffect(() => {
    configureGoogleSignIn();
    getProfile();
  }, []);

  // const onClickGoogleBindingHandler = async () => {
  //   try {
  //     const currentUser = auth.currentUser;

  //     if (!currentUser) return;

  //     await GoogleSignin.hasPlayServices();
  //     const { data } = await GoogleSignin.signIn();

  //     if (!data?.idToken) return;

  //     const googleCredential = GoogleAuthProvider.credential(data?.idToken);
  //     const userCredential = await linkWithCredential(
  //       currentUser,
  //       googleCredential,
  //     );
  //     const user = userCredential.user;

  //     setUser(user);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <ScreenLayout>
      <Typography type="title" style={GlobalStyles.textCenter}>
        ВАШ ПРОФИЛЬ
      </Typography>

      {user ? (
        <ProfileSummary />
      ) : (
        <Button type="gradient" onPress={() => router.replace("/signin")}>
          <Typography type="key" style={GlobalStyles.textDark}>ВОЙТИ В АККАУНТ</Typography>
        </Button>
      )}

      <View style={GlobalStyles.contentGap}>
        <Typography type="subtitle">ДОСТИЖЕНИЯ</Typography>
      </View>

      <View style={GlobalStyles.contentGap}>
        <Typography type="subtitle">НАСТРОЙКИ</Typography>
      </View>
    </ScreenLayout>
  );
}

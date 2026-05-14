// Atoms Components
import Typography from "@/components/atoms/Typography";

// Organisms Components
import ScreenLayout from "@/components/organisms/ScreenLayout";

// External Dependencies
import { View } from "react-native";
import { useEffect } from "react";

// Config
import { configureGoogleSignIn } from "@/config/google";

// Store
import { useAuthStore } from "@/store/useAuthStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export default function Profile() {
  const { user, isAnonymous } = useAuthStore();

  useEffect(() => {
    configureGoogleSignIn();
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

      <View></View>

      <View style={GlobalStyles.contentGap}>
        <Typography type="subtitle">ДОСТИЖЕНИЯ</Typography>
      </View>

      <View style={GlobalStyles.contentGap}>
        <Typography type="subtitle">НАСТРОЙКИ</Typography>
      </View>
    </ScreenLayout>
  );
}

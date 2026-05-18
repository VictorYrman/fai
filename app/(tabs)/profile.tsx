// Atoms Components
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";

// Organisms Components
import ScreenLayout from "@/components/organisms/ScreenLayout";
import ProfileSummary from "@/components/organisms/ProfileSummary";
import Settings from "@/components/organisms/Settings";

// External Dependencies
import { View } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

// Store
import { useAuthStore } from "@/store/useAuthStore";
import { useProfileStore } from "@/store/useProfileStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export default function Profile() {
  const { user } = useAuthStore();
  const { getProfile } = useProfileStore();
  const router = useRouter();

  useEffect(() => {
    getProfile();
  }, []);

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

        <Settings />
      </View>
    </ScreenLayout>
  );
}

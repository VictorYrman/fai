// Atoms Components
import Typography from "../atoms/Typography";

// Organisms Components
import EditProfileModal from "./EditProfileModal";

// External Dependencies
import { useState } from "react";
import { Image } from "expo-image";
import { Pressable, View } from "react-native";

// Storage
import { useProfileStore } from "@/store/useProfileStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { ProfileSummaryStyles } from "@/styles/components/organisms/ProfileSummary.styles";

const tempAvatar = require("@/assets/images/design/tempAvatar.jpg");

const ProfileSummary = () => {
  const { profile } = useProfileStore();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <View style={ProfileSummaryStyles.profileSummary}>
        <Image
          source={profile?.avatar || tempAvatar}
          style={ProfileSummaryStyles.profileSummaryAvatar}
        />

        <View style={GlobalStyles.elementsGap}>
          <Typography type="key">{profile?.name}</Typography>

          <Pressable onPress={() => setIsModalVisible(true)}>
            <Typography
              type="paragraph"
              style={GlobalStyles.textLightTranslucent}
            >
              Редактировать профиль
            </Typography>
          </Pressable>
        </View>
      </View>

      {isModalVisible && (
        <EditProfileModal
          visible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      )}
    </>
  );
};

export default ProfileSummary;

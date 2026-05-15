// Atoms Components
import Button from "../atoms/Button";
import Typography from "../atoms/Typography";

// Molecules Components
import InputField from "./InputField";
import ModalLayout from "../molecules/ModalLayout";

// External Dependencies
import { useState } from "react";
import { Image } from "expo-image";
import { View } from "react-native";
import * as ImagePicker from "expo-image-picker";

// Store
import { useProfileStore } from "@/store/useProfileStore";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { EditProfileModalStyles } from "@/styles/components/organisms/EditProfileModal.styles";

// Props Type
type EditProfileModalProps = {
  visible: boolean;
  onClose: () => void;
};

const tempAvatar = require("@/assets/images/design/tempAvatar.jpg");

const EditProfileModal = ({ visible, onClose }: EditProfileModalProps) => {
  const { profile, updateProfile } = useProfileStore();
  const [name, setName] = useState<string>(profile?.name || "");
  const [image, setImage] = useState<string>(profile?.avatar || tempAvatar);

  const onClickUploadImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.3,
      base64: true,
    });

    if (!result.canceled) {
      const image = `data:image/jpeg;base64,${result.assets[0].base64}`;

      setImage(image);
    }
  };

  const onClickSaveChanges = async () => {
    if (!profile) return;

    await updateProfile({
      ...profile,
      name: name,
      avatar: image,
    });

    onClose();
  };

  return (
    <ModalLayout visible={visible} onClose={onClose}>
      <View style={EditProfileModalStyles.editProfileModal}>
        <InputField
          label="Имя пользователя"
          value={name}
          placeholder="Введите имя..."
          onChange={(value) => setName(value)}
        />

        <View style={EditProfileModalStyles.editProfileModalUpload}>
          <Image
            source={image}
            style={EditProfileModalStyles.editProfileModalAvatar}
          />

          <Button type="gradient" onPress={onClickUploadImage}>
            <Typography type="key" style={GlobalStyles.textDark}>
              ЗАГРУЗИТЬ ИЗОБРАЖЕНИЕ
            </Typography>
          </Button>
        </View>
      </View>

      <Button type="gradient" onPress={onClickSaveChanges}>
        <Typography type="key" style={GlobalStyles.textDark}>
          СОХРАНИТЬ ИЗМЕНЕНИЯ
        </Typography>
      </Button>
    </ModalLayout>
  );
};

export default EditProfileModal;

// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Colors } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const EditProfileModalStyles = StyleSheet.create({
  editProfileModal: {
    ...GlobalStyles.contentGap,
    flex: 1,
  },
  editProfileModalUpload: {
    ...GlobalStyles.contentGap,
    ...GlobalStyles.columnCenter,
  },
  editProfileModalAvatar: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 100,
  },
});

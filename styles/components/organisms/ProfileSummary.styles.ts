// External Dependencies
import { StyleSheet } from "react-native";

// Constants
import { Colors, Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export const ProfileSummaryStyles = StyleSheet.create({
  profileSummary: {
    ...GlobalStyles.interactiveElement,
    ...GlobalStyles.rowAlignCenter,
    ...GlobalStyles.contentGap,
    paddingVertical: Spacing.small,
    paddingHorizontal: Spacing.medium,
  },
  profileSummaryAvatar: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 100,
  },
});

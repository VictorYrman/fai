// Atoms Components
import Typography from "../atoms/Typography";
import Icon, { IconType } from "../atoms/Icon";

// External Dependencies
import { Pressable } from "react-native";

// Constants
import { Colors, IconSize } from "@/constants/theme";

// Styles
import { SettingRowStyles } from "@/styles/components/organisms/SettingRow.styles";

// Props Type
type SettingRowProps = {
  icon: IconType;
  title: string;
  onPress: () => void;
};

const SettingRow = ({ icon, title, onPress }: SettingRowProps) => {
  return (
    <Pressable onPress={onPress} style={SettingRowStyles.settingRow}>
      <Icon
        icon={icon}
        width={IconSize.medium}
        height={IconSize.medium}
        color={Colors.light}
      />
      <Typography type="key">{title}</Typography>
    </Pressable>
  );
};

export default SettingRow;

// External Dependencies
import { StyleProp, ViewStyle } from "react-native";

// Local Icons
import LogoIcon from "@/assets/icons/logo.svg";
import GoogleIcon from "@/assets/icons/google.svg";
import AppleIcon from "@/assets/icons/apple.svg";
import GuestIcon from "@/assets/icons/guest.svg";
import SearchIcon from "@/assets/icons/search.svg";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg"
import ArrowUpIcon from "@/assets/icons/arrow-up.svg";
import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import WarmupIcon from "@/assets/icons/warmup.svg";
import StrengthIcon from "@/assets/icons/strength.svg";
import CardioIcon from "@/assets/icons/cardio.svg";
import StretchIcon from "@/assets/icons/stretch.svg";
import HomeIcon from "@/assets/icons/home.svg";
import TasksIcon from "@/assets/icons/tasks.svg";
import AnalyticsIcon from "@/assets/icons/analytics.svg";
import ProfileIcon from "@/assets/icons/profile.svg";

// Constants
import { Colors, IconSize } from "@/constants/theme";

const IconMap = {
    logo: LogoIcon,
    google: GoogleIcon,
    apple: AppleIcon,
    guest: GuestIcon,
    search: SearchIcon,
    "arrow-down": ArrowDownIcon,
    "arrow-up": ArrowUpIcon,
    "arrow-left": ArrowLeftIcon,
    "arrow-right": ArrowRightIcon,
    warmup: WarmupIcon,
    strength: StrengthIcon,
    cardio: CardioIcon,
    stretch: StretchIcon,
    home: HomeIcon,
    tasks: TasksIcon,
    analytics: AnalyticsIcon,
    profile: ProfileIcon
};

// Icon Type
export type IconType = keyof typeof IconMap;

// Props Type
type IconProps = {
    icon: IconType,
    width?: number;
    height?: number;
    color?: string;
    style?: StyleProp<ViewStyle>;
};

const Icon = ({ icon, width = IconSize.small, height = IconSize.small, color = Colors.light, style }: IconProps) => {
    const IconElement = IconMap[icon];

    return (
        <IconElement width={width} height={height} fill={color} style={style} />
    );
};

export default Icon;
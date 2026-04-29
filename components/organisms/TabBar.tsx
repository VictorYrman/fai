// Atoms Components
import Typography from "../atoms/Typography";

// External Dependencies
import { Pressable, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

// Constants
import { Colors, IconSize } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";
import { TabBarStyles } from "@/styles/components/organisms/TabBar.styles";

// Props Type
type TabBarProps = {
  props: BottomTabBarProps;
};

const TabBar = ({ props }: TabBarProps) => {
  const { state, descriptors, navigation } = props;

  const activeColor = Colors.primary;
  const inactiveColor = Colors.lightTranslucent;

  return (
    <View style={TabBarStyles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const icon = options.tabBarIcon;
        const title = options.title;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const color = isFocused ? activeColor : inactiveColor;

        return (
          <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={TabBarStyles.tabBarItem}
          >
            {icon &&
              icon({
                color,
                focused: isFocused,
                size: IconSize.medium,
              })}
            <Typography
              type="paragraph"
              style={
                isFocused
                  ? GlobalStyles.textPrimary
                  : GlobalStyles.textLightTranslucent
              }
            >
              {title}
            </Typography>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabBar;

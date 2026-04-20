// External Dependencies
import { Pressable, PressableProps, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Constants
import { Colors } from "@/constants/theme";

// Styles
import { ButtonStyles } from "@/styles/components/atoms/Button.styles";

// Button Styles
const ButtonTypes = {
  gradient: [ButtonStyles.button, ButtonStyles.gradient],
  google: [ButtonStyles.button, ButtonStyles.google],
};

// Button Type
type ButtonType = keyof typeof ButtonTypes;

// Props Type
type ButtonProps = PressableProps & {
  type: ButtonType;
  children: React.ReactNode;
  onPress: () => void;
};

// Gradient Coordinates
const GradientCoordinates = {
  start: { x: 0, y: 0.5 },
  end: { x: 1, y: 0.5 }
};

// Gradient Colors
const GradientColors = [Colors.primary, Colors.secondary] as const;

const Button = ({ type, children, onPress, ...props }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={ButtonTypes[type]} {...props}>
      {type === "gradient" ? (
        <LinearGradient
          start={GradientCoordinates.start}
          end={GradientCoordinates.end}
          colors={GradientColors}
          style={ButtonStyles.buttonContainer}
        >
          {children}
        </LinearGradient>
      ) : (
        <View style={ButtonStyles.buttonContainer}>
          {children}
        </View>
      )}
    </Pressable>
  );
};

export default Button;

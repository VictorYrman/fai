// External Dependencies
import { StyleProp, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Constants
import { Colors } from '@/constants/theme';

// Props Type
type GradientBackgroundProps = {
    children: React.ReactNode;
    style: StyleProp<ViewStyle>;
}

// Coordinates 
const Coordinates = {
    start: { x: 0, y: 1 },
    end: { x: 1, y: 0 }
};

// Gradient Colors
const GradientColors = [Colors.purple, Colors.background, Colors.background, Colors.primary] as const;

// Locations
const Locations = [0, 0.3, 0.7, 1] as const;

const GradientBackground = ({ children, style }: GradientBackgroundProps) => {
    return (
        <LinearGradient
            start={Coordinates.start}
            end={Coordinates.end}
            colors={GradientColors}
            locations={Locations}
            style={style}
        >
            {children}
        </LinearGradient>
    );
};

export default GradientBackground;
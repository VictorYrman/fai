// Atoms Components
import Icon from "../atoms/Icon";

// Organisms Components
import FAIAssistantModal from "./FAIAssistantModal";

// External Dependencies
import { useState } from "react";
import { Pressable } from "react-native";

// Constants
import { Colors, IconSize } from "@/constants/theme";

// Styles
import { FAIAssistantStyles } from "@/styles/components/organisms/FAIAssistant.styles";
import { LinearGradient } from "expo-linear-gradient";

const GradientCoordinates = {
  start: { x: 0, y: 0.5 },
  end: { x: 1, y: 0.5 },
};

const GradientColors = [Colors.primary, Colors.secondary] as const;

const FAIAssistant = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <Pressable
        onPress={() => setIsModalVisible(true)}
        style={FAIAssistantStyles.faiAssistant}
      >
        <LinearGradient
          start={GradientCoordinates.start}
          end={GradientCoordinates.end}
          colors={GradientColors}
          style={FAIAssistantStyles.faiAssistantContent}
        >
          <Icon
            icon="bot"
            width={IconSize.medium}
            height={IconSize.medium}
            color={Colors.dark}
          />
        </LinearGradient>
      </Pressable>

      <FAIAssistantModal 
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </>
  );
};

export default FAIAssistant;

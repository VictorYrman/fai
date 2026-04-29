// Atoms Components
import Button from "@/components/atoms/Button";
import GradientBackground from "@/components/atoms/GradientBackground";
import Typography from "@/components/atoms/Typography";

// Molecules Components
import Accordion from "@/components/molecules/Accordion";
import SelectionPicker from "@/components/molecules/SelectionPicker";

// External Dependencies
import { useState } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

const Days = [
  { value: "Monday", title: "Mon" },
  { value: "Tuesday", title: "Tue" },
  { value: "Wednesday", title: "Wed" },
  { value: "Thursday", title: "Thu" },
  { value: "Friday", title: "Fri" },
  { value: "Saturday", title: "Sat" },
  { value: "Sunday", title: "Sun" },
];

export default function Demo() {
  const [day, setDay] = useState<string>(Days[0].value);

  const router = useRouter();
  const HeaderHeight = useHeaderHeight();

  const PaddingTop = HeaderHeight + Spacing.long;

  return (
    <GradientBackground
      style={[GlobalStyles.screen, { paddingTop: PaddingTop }]}
    >
      <Typography type="title" style={GlobalStyles.textCenter}>
        HERE’S YOUR PERSONAL PROGRAM FOR THE WEEK
      </Typography>

      <View style={{ flex: 1 }}>
        <SelectionPicker
          value={day}
          selections={Days}
          onSelect={(day) => setDay(day)}
        />

        <Accordion title="Warm-up">
          <View></View>
        </Accordion>

        <Accordion title="Base">
          <View></View>
        </Accordion>

        <Accordion title="Cool-down">
          <View></View>
        </Accordion>
      </View>

      <Button type="gradient" onPress={() => router.navigate("/signin")}>
        <Typography type="key" style={GlobalStyles.textDark}>
          SAVE THE TRAINING PROGRAM
        </Typography>
      </Button>
    </GradientBackground>
  );
}

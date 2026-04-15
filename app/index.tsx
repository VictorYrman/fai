// Atoms Components
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import GradientBackground from "@/components/atoms/GradientBackground";

// Molecules Components
import TaskCard from "@/components/molecules/TaskCard";
import Accordion from "@/components/molecules/Accordion";

// External Dependencies
import { View } from "react-native";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

export default function Index() {
  return (
    <GradientBackground
      style={{
        flex: 1,
        ...GlobalStyles.columnCenter,
        gap: Spacing.long,
        padding: Spacing.medium,
      }}
    >
      <View
        style={{
          ...GlobalStyles.columnCenter,
          gap: Spacing.medium,
        }}
      >
        <Typography type="title">WELCOME TO FAI!</Typography>
        <Typography
          type="paragraph"
          style={GlobalStyles.textCenter}
        >
          No gyms, memberships, or complicated equipment. Just a phone and a
          desire, and you are already closer to your goal. FAI adapts to you,
          your goals, and your well-being.
        </Typography>
      </View>

      <Button type="gradient" onPress={() => {}}>
        <Typography
          type="key"
          style={GlobalStyles.textDark}
        >
          START THE JOURNEY!
        </Typography>
      </Button>

      <View
        style={{
          width: "100%",
          gap: Spacing.medium,
        }}
      >
        <Accordion title="Strength" defaultExpanded={false}>
          <TaskCard
            type="strength"
            title="Classic push-ups"
            description="Perform 10 repetitions in 3 sets."
            onPress={() => {}}
          />
          <TaskCard
            type="cardio"
            title="Burpee"
            description="Perform 5 repetitions in 2 sets."
            onPress={() => {}}
          />
        </Accordion>
        <TaskCard
          type="warmup"
          title="Cat-Cow Pose"
          description="Perform 10 repetitions in 1 set."
          onPress={() => {}}
        />
        <TaskCard
          type="stretch"
          title="Downward-Facing Dog"
          description="Perform 1 set of 45 seconds."
          onPress={() => {}}
        />
      </View>
    </GradientBackground>
  );
}

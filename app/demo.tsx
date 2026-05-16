// Atoms Components
import Button from "@/components/atoms/Button";
import GradientBackground from "@/components/atoms/GradientBackground";
import Typography from "@/components/atoms/Typography";

// Organisms Components
import DayProgram, { Days } from "@/components/organisms/DayProgram";

// External Dependencies
import { useMemo, useState } from "react";
import { ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";

// Store
import { useProgramStore } from "@/store/useProgramStore";

// Constants
import { Spacing } from "@/constants/theme";

// Styles
import { GlobalStyles } from "@/styles/global/GlobalStyles";

const currentDay =
  Days[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1].value;

export default function Demo() {
  const { program } = useProgramStore();
  const [day, setDay] = useState<string>(currentDay);

  const currentProgram = useMemo(() => {
    if (!program) return undefined;
    return program.days.find(
      (programDay) => programDay.day.toLowerCase() === day.toLowerCase(),
    );
  }, [program, day]);

  const router = useRouter();
  const HeaderHeight = useHeaderHeight();

  const PaddingTop = HeaderHeight + Spacing.long;

  return (
    <GradientBackground
      style={[GlobalStyles.screen, { paddingTop: PaddingTop }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Typography type="title" style={GlobalStyles.textCenter}>
          ВАША ПРОГРАММА НА НЕДЕЛЮ
        </Typography>

        <DayProgram
          day={day}
          onSelect={(value) => setDay(value)}
          currentProgram={currentProgram}
        />
      </ScrollView>

      <Button type="gradient" onPress={() => router.navigate("/signin")}>
        <Typography type="key" style={GlobalStyles.textDark}>
          СОХРАНИТЬ ПРОГРАММУ
        </Typography>
      </Button>
    </GradientBackground>
  );
}

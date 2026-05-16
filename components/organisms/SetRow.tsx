// Atoms Components
import Typography from "../atoms/Typography";

// Molecules Components
import Timer from "../molecules/Timer";

// External Dependencies
import { View } from "react-native";
import { useEffect, useState } from "react";

// Styles
import { SetRowStyles } from "@/styles/components/organisms/SetRow.styles";

// Props Type
type SetRowProps = {
  number: number;
  time: number;
  target: number;
  isStatic: boolean;
  isActive: boolean;
};

const SetRow = ({ number, time, target, isStatic, isActive }: SetRowProps) => {
  const [liveSeconds, setLiveSeconds] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      setLiveSeconds(0);
      interval = setInterval(() => {
        setLiveSeconds((previous) => previous + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  const secondsToRender = isActive ? liveSeconds : time;

  return (
    <View style={SetRowStyles.setRow}>
      <Typography type="paragraph">{number}</Typography>

      <Timer seconds={secondsToRender} />

      <Typography type="paragraph">
        {isStatic ? `${target} сек.` : `${target} пов.`}
      </Typography>
    </View>
  );
};

export default SetRow;

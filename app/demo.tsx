// Atoms Components
import GradientBackground from "@/components/atoms/GradientBackground";
import Typography from "@/components/atoms/Typography";

// Molecules Components
import DaysManager from "@/components/molecules/DaysManager";

// External Dependencies
import { useState } from "react";
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
    { value: "Sunday", title: "Sun" }
];

export default function Demo() {
    const [day, setDay] = useState<string>(Days[0].value);
    const HeaderHeight = useHeaderHeight();

    const PaddingTop = HeaderHeight + Spacing.long;

    return (
        <GradientBackground style={[GlobalStyles.screen, { paddingTop: PaddingTop }]}>
            <Typography type="title" style={GlobalStyles.textCenter}>HERE’S YOUR PERSONAL PROGRAM FOR THE WEEK</Typography>

            <DaysManager value={day} days={Days} onSelect={(day) => setDay(day)}  />
        </GradientBackground>
    );
};
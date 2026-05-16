// Atoms Components
import Typography from "../atoms/Typography";

// Props Type
type TimerProps = {
    seconds: number;
};

const Timer = ({ seconds }: TimerProps) => {
    const formatTime = (totalSeconds: number) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        
        const formattedMins = mins < 10 ? `0${mins}` : mins;
        const formattedSecs = secs < 10 ? `0${secs}` : secs;

        return `${formattedMins}:${formattedSecs}`;
    }

    return (
        <Typography type="key">
            {formatTime(seconds)}
        </Typography>
    );
};

export default Timer;
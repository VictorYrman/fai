// Atoms Components
import Typography from "../atoms/Typography";

// Styles
import { AdviceStyles } from "@/styles/components/molecules/Advice.styles";

const AdviceTypes = {
  warning: [AdviceStyles.warning],
  recommendation: [AdviceStyles.recommendation],
};

export type AdviceType = keyof typeof AdviceTypes;

// Props Type
type AdviceProps = {
  type: AdviceType;
  title: string;
};

const Advice = ({ type, title }: AdviceProps) => {
  return (
    <Typography type="small" style={AdviceTypes[type]}>
      {title}
    </Typography>
  );
};

export default Advice;

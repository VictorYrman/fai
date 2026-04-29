// Atoms Components
import Typography from './Typography';

// Styles
import { AdviceStyles } from '@/styles/components/atoms/Advice.styles';

const AdviceTypes = {
    warning: [AdviceStyles.warning],
    recommendation: [AdviceStyles.recommendation]
};

export type AdviceType = keyof typeof AdviceTypes;

// Props Type
type AdviceProps = {
    type: AdviceType;
    title: string;
};

const Advice = ({ type, title }: AdviceProps) => {
    return (
        <Typography type="small" style={AdviceTypes[type]}>{title}</Typography>
    );
};

export default Advice;
// Atoms Components
import Advice, { AdviceType } from '../atoms/Advice';
import Typography from '../atoms/Typography';
import OptionCircle from '../atoms/OptionCircle';

// External Dependencies
import { Image } from 'expo-image';
import { Pressable, PressableProps, View } from 'react-native';

// Store
import { useSurveyStore } from '@/store/useSurveyStore';

// Styles
import { GlobalStyles } from '@/styles/global/GlobalStyles';
import { CardOptionStyles } from '@/styles/components/molecules/CardOption.styles';

// Props Type
type CardOptionProps = PressableProps & {
    value: string;
    image: any;
    title: string;
    description: string;
    advice?: { type: AdviceType, title: string };
    isSelected: boolean;
    onSelect: (value: string) => void;
};

const CardOption = ({ value, image, title, description, advice, isSelected, onSelect }: CardOptionProps) => {
    const { survey } = useSurveyStore();

    const onSelectHandler = () => {
        onSelect(value);
    };

    return (
        <Pressable onPress={onSelectHandler} style={[CardOptionStyles.cardOption, isSelected ? CardOptionStyles.cardOptionSelected : null]}>
            <Image source={survey.gender === "Male" ? image.male : image.female} style={CardOptionStyles.cardOptionImage} />

            <View style={[CardOptionStyles.cardOptionContent]}>
                <Typography type="key" style={isSelected ? GlobalStyles.textPrimary : null}>{title}</Typography>
                <Typography type="paragraph" style={isSelected ? GlobalStyles.textPrimary : null}>{description}</Typography>
            </View>

            <View style={CardOptionStyles.statusContainer}>
                {advice && (
                    <Advice type={advice.type} title={advice.title} />
                )}
                <OptionCircle isSelected={isSelected} />
            </View>
        </Pressable>
    );
};

export default CardOption;
// Atoms Components
import Typography from '../atoms/Typography';

// External Dependencies
import { Image } from 'expo-image';
import { Pressable, PressableProps, View } from 'react-native';

// Styles
import { CardOptionStyles } from '@/styles/components/molecules/CardOption.styles';
import { GlobalStyles } from '@/styles/global/GlobalStyles';
import OptionCircle from '../atoms/OptionCircle';

// Props Type
type CardOptionProps = PressableProps & {
    value: string;
    image: string;
    title: string;
    description: string;
    advice?: string;
    isSelected: boolean;
    onSelect: (value: string) => void;
};

const CardOption = ({ value, image, title, description, advice, isSelected, onSelect }: CardOptionProps) => {
    const onSelectHandler = () => {
        onSelect(value);
    };

    return (
        <Pressable onPress={onSelectHandler} style={[CardOptionStyles.cardOption, isSelected ? CardOptionStyles.cardOptionSelected : null]}>
            <Image source={image} style={CardOptionStyles.cardOptionImage} />

            <View style={[CardOptionStyles.cardOptionContent]}>
                <Typography type="key" style={isSelected ? GlobalStyles.textPrimary : null}>{title}</Typography>
                <Typography type="paragraph" style={isSelected ? GlobalStyles.textPrimary : null}>{description}</Typography>
            </View>

            <View style={CardOptionStyles.statusContainer}>
                {advice && (
                    <Typography type="paragraph">{advice}</Typography>
                )}
                <OptionCircle isSelected={isSelected} />
            </View>
        </Pressable>
    );
};

export default CardOption;
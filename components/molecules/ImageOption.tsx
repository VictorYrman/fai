// Atoms Components
import Typography from "../atoms/Typography";
import OptionCircle from "../atoms/OptionCircle";

// External Dependencies
import { Image } from "expo-image";
import { Pressable } from "react-native";

// Styles
import { ImageOptionStyles } from "@/styles/components/molecules/ImageOption.styles";
import { GlobalStyles } from "@/styles/global/GlobalStyles";

// Props Type
type ImageOptionProps = {
    value: string;
    image: string;
    title: string;
    isSelected: boolean;
    onSelect: (value: string) => void;
}

const ImageOption = ({ value, image, title, isSelected, onSelect }: ImageOptionProps) => {
    const onSelectHandler = () => {
        onSelect(value);
    }

    return (
        <Pressable onPress={onSelectHandler} style={[ImageOptionStyles.imageOption, isSelected ? ImageOptionStyles.imageOptionSelected : null]}>
            <Image source={image} style={ImageOptionStyles.imageOptionImage} />
            <Typography type="key" style={isSelected ? GlobalStyles.textPrimary : null}>{title}</Typography>

            <OptionCircle isSelected={isSelected} style={ImageOptionStyles.statusContainer} />
        </Pressable>
    );
};

export default ImageOption;
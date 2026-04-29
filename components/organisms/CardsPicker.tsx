// Atoms Components
import { AdviceType } from "../atoms/Advice";

// Molecules Components
import CardOption from "../molecules/CardOption";

// External Dependencies
import { View } from "react-native";

// Styles
import { CardsPickerStyles } from "@/styles/components/organisms/CardsPicker.styles";

export type Card = {
    value: string;
    image: any;
    title: string;
    description: string;
    advice?: { type: AdviceType, title: string } | undefined;
};

// Props Type
type CardsPickerProps = {
    value: string;
    cards: Card[];
    onSelect: (value: string) => void;
};

const CardsPicker = ({ value, cards, onSelect }: CardsPickerProps) => {
    return (
        <View style={CardsPickerStyles.cardsPicker}>
            {cards.map((card: Card, index: number) => (
                <CardOption key={index} value={card.value} image={card.image} title={card.title} description={card.description} advice={card.advice} isSelected={value === card.value} onSelect={(value: string) => onSelect(value)}  />
            ))}
        </View>
    );
};

export default CardsPicker;
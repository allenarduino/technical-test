import { cardData } from "./cardsdata";
import { CardDataType } from "./cardsdata";



export const handleSelect = (id: string): CardDataType | undefined => {
    const item = cardData.find(item => item.id === id);
    if (item) {
        return { ...item, selected: true };
    }
    return undefined;
}


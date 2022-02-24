import { applyColor } from '../logic/logic.js';

export const colorHandler = (event) => {
    const newColor = event.target.value;
    const newBgColor = applyColor(newColor);
    return newBgColor;
}
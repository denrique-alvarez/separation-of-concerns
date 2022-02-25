import { applyColor } from '../logic/logic.js';

export const colorHandler = () => {
    const interfaceEl = document.getElementById('user-interface');
    const changeColor = applyColor(interfaceEl);

    return changeColor;
}
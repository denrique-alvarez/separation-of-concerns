import { revealSecret } from '../logic/logic.js';
import { hideSecret } from '../logic/logic.js';

export const secretHandler = () => {
    let message = document.getElementById('the-secret');
    const revealed = revealSecret(message);

    return revealed;
}

export const secretHandler2 = () => {
    let message = document.getElementById('the-secret');
    const hidden = hideSecret(message);

    return hidden;
}
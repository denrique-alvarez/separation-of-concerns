/**
 *
 */

import { data } from './data.js';

export const saveNoCopies = () => {
    const alreadySaved = data.noCopies.includes(userInput);
    if (!alreadySaved) {
        data.noCopies.push(userInput);
    }
};
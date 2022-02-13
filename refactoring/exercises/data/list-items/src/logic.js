/**
 *
 */
import { bulletPoint } from './data.js';

export const list = (allInputs) => {
    let stringList = '';
    for (const input of allInputs) {
        stringList += `\n${bulletPoint} ${input}`;
    }
    return stringList;
};
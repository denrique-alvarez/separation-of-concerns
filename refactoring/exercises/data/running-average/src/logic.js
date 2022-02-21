/**
 *
 */

import { data } from './data.js';

export const average = (userInput) => {
    data.numbers.push(userInput);
    data.average = data.numbers.reduce((sum, next) => sum + next, 0) / data.numbers.length;
};

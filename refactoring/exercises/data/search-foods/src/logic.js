/**
 *
 */

import { data } from './data.js';

export const search = (data, query) => {
    const results = data.foods.filter((food) => food.includes(query)).map((food) => `\n- ${food}`).join('');

    return results;
};

import { search } from './utils.js';
import { data } from './data.js';

export const searchFoodsHandler = () => {
    // read & process user input
    const query = prompt('enter a search query');
    if (query === null || query === '') {
        return;
    }

    // execute core logic
    search(query);

    // communicate result to user
    const message = `foods matching "${query}":${results}`;
    alert(message);

    // log the interaction
    console.log(query);
};

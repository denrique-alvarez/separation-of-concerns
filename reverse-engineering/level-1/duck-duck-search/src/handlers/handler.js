import { search } from '../logic/logic.js';

export const searchHandler = () => {
    const termToSearch = document.getElementById('query').value;
    const result = search(termToSearch);
    return result;
}
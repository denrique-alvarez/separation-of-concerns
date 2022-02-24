export const search = (termToSearch) => {
    const openDuck = window.open('https://duckduckgo.com/?q='+termToSearch);
    return openDuck;
}
import { reverseAndUpper } from './logic.js';

export const reverseAndUpperHandler = (event) => {
    // debugger;
    // read and process user input
    const input = event.target.value;

    // execute core logic

    const reversedUppercase = reverseAndUpper(input);

    // render result for user
    document.getElementById('output').innerHTML = reversedUppercase;

    // log result for developers
    console.log('\n --- user action ---');
    console.log('input:', input);
    console.log('reversedUppercase:', reversedUppercase);
};

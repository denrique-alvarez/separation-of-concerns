'use strict';

// the assertions are correct!  write code above to pass them

const element = document.createElement('p');
element.innerHTML = 'lorem ipsum dolor';
element.className = 'fancy-text';

console.assert(element.nodeName === 'P', 'Test 1: nodeName');
console.assert(element.innerHTML === 'lorem ipsum dolor', 'Test 2: innerHTML');
console.assert(element.className === 'fancy-text', 'Test 3: className');

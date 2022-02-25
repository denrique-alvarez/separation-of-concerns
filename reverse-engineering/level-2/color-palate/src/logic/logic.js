/**
 * 
 * 
 * 
 * 
 */

export const applyColor = (interfaceEl) => {
    let colorEl = document.getElementById('color-form').children[0];
    let newColor = colorEl.value;

    interfaceEl.style.backgroundColor = newColor;

    return interfaceElColor;
}
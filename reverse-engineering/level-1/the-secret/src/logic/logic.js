/**
 *
 *
 *
 *
 *
 */

export const revealSecret = (message) => {
    message.style.color = 'black';

    return message;
}

export const hideSecret = (message) => {
    message.style.color = 'white';
    return message;
}
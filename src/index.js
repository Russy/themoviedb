import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello 3', 'webp 2ack'], ' ');
        console.log('sdfsd 3f');
    return element;
}

document.body.appendChild(component());

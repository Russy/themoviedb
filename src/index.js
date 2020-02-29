
import * as _ from 'lodash';
import "./style.scss";

import Header from "./modules/header"

function component() {

    const element = document.createElement('div');

    const header = new Header();
    element.innerHTML = _.join([
        header.render()
    ], ' ');

    return element;
}

document.body.appendChild(component());

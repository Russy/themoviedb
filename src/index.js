
import * as _ from 'lodash';
import "./style.scss";

import Header from "./modules/header"

function component() {

    const element = document.createElement('div');

    element.innerHTML = _.join([
        Header.render()
    ], ' ');

    return element;
}

document.body.appendChild(component());

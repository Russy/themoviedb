import "./style.scss";
class Header {
    button = null;
    constructor() {
        setTimeout(() => {
            this.button = document.querySelector('#button');
            this.events();
        });
    }
    events = () => {
        this.button.onclick = this.onclick
    }

    onclick = (e: EventListener) => {
        console.log(e);
        console.log('click!!!');
    }

    render() {
        return `
            <button id="button">sdafsdf</button>
        `;
    }
}

export default new Header();

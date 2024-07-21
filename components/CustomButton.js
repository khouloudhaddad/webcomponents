export default class CustomButton extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.shadow.innerHTML = `
        <style>
            :host{
                --bg-gray: #000;
            }
            button{
                border: none;
                border-radius: 0.325rem;
                padding: 0.5rem 1.125rem;
                background: var(--bg-gray);
                color: #fff;
            }
        </style>
        <button><slot/></button>
        `
    }
}
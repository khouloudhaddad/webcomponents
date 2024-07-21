export default class CustomButton extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.shadow.innerHTML = `
        <style>
            button{
                border: none;
                border-radius: 0.325rem;
                padding: 0.5rem 1.125rem;
                background: #333;
                color: #fff;
            }
        </style>
        <button>MonTexte</button</button>
        `
    }
}
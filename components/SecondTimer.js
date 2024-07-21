export default class SecongTimer extends HTMLElement{

    static get observedAttributes(){ return ['prefix']; }
    constructor(){
        super();
        this.i = 0;
        this.span = document.createElement('span')
        this.span.classList.add('badge', 'text-bg-secondary', "ms-1");
        this.span.innerHTML = this.i;
        this.$prefix = document.createElement('span');
        //this.$prefix.innerHTML = this.getAttribute('prefix');
        this.appendChild(this.$prefix)
        this.appendChild(this.span);
    }

    connectedCallback(){
        this.timer = window.setInterval(()=>{
            this.i++;
            this.span.innerHTML = this.i;
        }, 1000)
    }

    disconnectedCallback(){
        clearInterval(this.timer)
    }

    attributeChangedCallback(name, oldValue, newValue){
        // console.log(arguments)
        if(name === 'prefix' && oldValue !== newValue){
            this.$prefix.innerHTML = newValue + " : ";
        }
    }
}

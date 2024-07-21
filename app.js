class SecongTimer extends HTMLElement{
    constructor(){
        super();
        this.i = 0;
        this.span = document.createElement('span')
        this.span.classList.add('badge', 'text-bg-secondary');
        this.span.innerHTML = this.i;
        this.appendChild(this.span)
        window.setInterval(()=>{
            this.i++;
            this.span.innerHTML = this.i;
        }, 1000)
        //this.innerHTML = 'Mon compteur';

    }
}

customElements.define('second-timer', SecongTimer);

document.querySelector('#add').addEventListener('click', ()=>{
    document.querySelector('second-timer').remove()
})
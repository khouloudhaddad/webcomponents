import SecondTimer from "./components/SecondTimer.js";

customElements.define('second-timer', SecondTimer);

document.querySelector('#add').addEventListener('click', ()=>{
    document.querySelector('second-timer').setAttribute('prefix', 'Demo')
})
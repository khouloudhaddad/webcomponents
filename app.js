import SecondTimer from "./components/SecondTimer.js";
import Datepicker from "./components/Datepicker.js";

customElements.define('second-timer', SecondTimer);
customElements.define('date-picker', Datepicker, {extends: 'input'})

document.querySelector('#add').addEventListener('click', ()=>{
    document.body.appendChild(new Datepicker())
})
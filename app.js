import SecondTimer from "./components/SecondTimer.js";
import Datepicker from "./components/Datepicker.js";
import CustomButton from "./components/CustomButton.js";

customElements.define('second-timer', SecondTimer);
customElements.define('date-picker', Datepicker, {extends: 'input'})
customElements.define('custom-button', CustomButton);

document.querySelector('#add').addEventListener('click', ()=>{
    document.body.appendChild(new Datepicker())
})
import SecondTimer from "./components/SecondTimer.js";
import Datepicker from "./components/Datepicker.js";
import CustomButton from "./components/CustomButton.js";

customElements.define('second-timer', SecondTimer);
customElements.define('date-picker', Datepicker, {extends: 'input'})
customElements.define('custom-button', CustomButton);

document.querySelector('#add').addEventListener('click', ()=>{
    const template = document.querySelector('#repeater');
    const templateContent = template.content
    document.querySelector('#app').appendChild(templateContent.cloneNode(true))
})
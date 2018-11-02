document.querySelectorAll('.digits, .operation, .division')
    .forEach(el => el.addEventListener('click', digitOperClick));

function digitOperClick(e) {
    const target = e.target;
    const display = document.querySelector('.display');
    display.value += target.innerText;
}
document.querySelector('.equal')
    .addEventListener('click', equal);

function equal() {
    const display = document.querySelector('.display');
    display.value = eval(display.value);
}

document.querySelector('.clear')
    .addEventListener('click', reset);

function reset() {
    const display = document.querySelector('.display');
    display.value = "";
}

document.querySelector('.square')
    .addEventListener('click', square);

function square() {
    const display = document.querySelector('.display');
    display.value *= display.value;
}

document.querySelector('.division')
    .addEventListener('click', division);

function division() {
    const display = document.querySelector('.display');
    display.value.divisionN;
}
function divisionN () {
    const display = document.querySelector('.display');
   if (display.value > 0) {
        display.value = eval(display.value);
   }else {
       display.value += display.value.innerText('ksd');
   }
    
}

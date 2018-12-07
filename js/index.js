(function() {
    document.querySelectorAll('.operation, .digits, .division ').
    forEach(el => el.addEventListener('click', xxx))

    function xxx(el) {
        const target = el.target;
        const display = document.querySelector('.display');
        display.value += target.innerText;
    }
    document.querySelector('.equal').
    addEventListener('click', equal);

    function equal() {
        const display = document.querySelector('.display');
        display.value = eval(display.value);
    }
    document.querySelector('.clear').
    addEventListener('click', clear);

    function clear() {
        const display = document.querySelector('.display');
        display.value = "";
    }
    document.querySelector('.square').
    addEventListener('click', square);

    function square() {
        const display = document.querySelector('.display');
        display.value *= display.value;
    }
})();

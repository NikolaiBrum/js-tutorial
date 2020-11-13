'use strict';

let rollBtn = document.getElementById('rollBtn');
let randomRoll = document.getElementById('roll');

const rollIt = (min, max) => {
    let calc = max - min + 1;
    let rando = Math.random() * calc;
    let final = Math.floor(rando) + min;

    return final;
}

rollBtn.addEventListener('click', () => {
    randomRoll.innerHTML = rollIt(1, 10);
});
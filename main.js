'use strict';
const btn = document.getElementById('btn')
const result = document.getElementById('result')
const titles = document.getElementsByClassName('title')
const title = titles[0]


const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generate = () => {
    const minEl = document.getElementById('input1');
    const maxEl = document.getElementById('input2');
    const result = document.getElementById('result')
    const min = Number(minEl.value);
    const max = Number(maxEl.value);

    if (minEl.value === '' || maxEl.value === '') {
        alert("Please, enter min and max values");
        return;
    }
    if (min > max) {
        alert("Min is not supposed to be more than max");
        return;
    }

    result.textContent = getRandomNumber(min, max)
}

btn.addEventListener('click', generate)


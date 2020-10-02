'use strict';

const bar1 = new ProgressBar(0);
const bar2 = new ProgressBar(4);
const bar3 = new ProgressBar(9);

const appElm = document.getElementById('app');

bar1.mount(appElm);
bar2.mount(appElm);
bar3.mount(appElm);

const btnElm = document.querySelector('.btn')
const knob2Elm = document.querySelector('.knob')
const knob3Elm = document.querySelector('.knob')

btnElm.addEventListener('click', () => {
// knobElm.style.width = 255 / 10
const btnColor = `rgb(${bar1.value * 15},${bar2.value * 15},${bar3.value * 15})`
btnElm.style.backgroundColor = btnColor;
})
// const btnElm=document.querySelector('.btn')
// btnElm.addEventListener('click',()=>{
//     knob1Elm.style.width = 255 / bar1.value
//     knob2Elm.style.width = 255 / bar2.value
//     knob3Elm.style.width = 255 / bar3.value
//     const btnColor = `rgb(${knob1Elm.style.width},${knob2Elm.style.width},${knob3Elm.style.width})`;
//     btnElm.style.backgroundColor=btnColor;
// })

// const btnPlus = document.querySelector('#plus');
// btnPlus.addEventListener('click', () => {
//   bar.increment();
//   bar.update();
// });

// const btnMinus = document.querySelector('#minus');
// btnMinus.addEventListener('click', () => {
//   bar.decrement();
//   bar.update();
// });

// update();
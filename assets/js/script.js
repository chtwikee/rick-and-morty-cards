// import { animBoxShadowCards } from './anim.js';
import { cardsRM } from './api.js';

const cards = document.querySelectorAll('.cards');

const imgCards = document.querySelectorAll('.card-img');
const cardTitle = document.querySelectorAll('.card-title');

const items = await cardsRM();



function createElement() {
    const section = document.querySelector('#container-wrapper');
    let div = document.createElement('div');
    let img = document.createElement('img');
    let h1 = document.createElement('h1');

    section.appendChild(div);
    div.appendChild(img);
    div.appendChild(h1);

    div.className = 'cards';
    img.className = 'card-img';
    h1.className = 'card-title';

    console.log(div, img, h1);
}

document.getElementById('btn').addEventListener('click', () => {
    createElement();
})
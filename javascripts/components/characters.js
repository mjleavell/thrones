import {printToDom} from '../helpers/util.js';
import {detailsBuilder} from './detail.js';

let characters = [];

const setCharacters = (newArray) => {
    characters = newArray;
}

const charactersBuilder = () => {
    let newString = "";
    characters.forEach((character) => {
        newString += `<div class="character-card m-2" id="${character.id}">`
        newString += `<div class="card">`
        newString += `<img class="card-img-top" src="${character.imageUrl}" alt="${character.name}">`
        newString += `<div class="card-body">`
        newString += `<h5 class="card-title">${character.name}</h5>`
        newString += `</div>`
        newString += `</div>`
        newString += `</div>`;
    })
    printToDom(newString, 'characters');
    createEvents();
}

const characterClick = (e) => {
        const characterId = e.target.closest('.character-card').id;
        const currentCharacter = characters.find(x => x.id === characterId);
        detailsBuilder(currentCharacter);
        // console.log('currentCharacter', currentCharacter);
}

const createEvents = () => {
    const characterCards = document.getElementsByClassName('character-card');
    for (let i = 0; i < characterCards.length; i++) {
        characterCards[i].addEventListener('click', characterClick);
    }
}

export {charactersBuilder, setCharacters}
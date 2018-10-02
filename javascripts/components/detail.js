import { printToDom } from "../helpers/util.js";

// import {printToDom} from '../helpers/util.js'

// have to pass something in function because we are passing currentCharacter on character.js
// if i had an array i would need a for loop 
const detailsBuilder = (character) => {
    let newString = '';
    newString += `<div class="col-6" id="details">`
    newString +=    `<div class="row">`
    newString +=        `<div class="col">`
    newString +=            `<img src="${character.imageUrl}" alt="${character.name}">`
    newString +=        `</div>`
    newString +=        `<div class="col">`
    newString +=            `<h1>${character.name}</h1>`
    newString +=            `<h3>House of ${character.house}</h3>`
    newString +=        `</div>`
    newString +=    `</div>`
    newString += `</div>`
    console.log('character', character);
    printToDom(newString, 'characters');
}

export {detailsBuilder}
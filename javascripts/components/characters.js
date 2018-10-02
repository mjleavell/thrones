import {printToDom} from '../helpers/util.js';

const characters = [
    {
        name: 'Daenerys Targaryen',
        house: 'Targaryen',
        imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/5/5f/Daenerys_Dragonpit.jpg/revision/latest?cb=20171015095128'
    },
    {
        name: 'Jon Snow',
        house: 'Stark',
        imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553'
    },
    {
        name: 'Cersei Lannister',
        house: 'Lannister',
        imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/c/c3/Profile-CerseiLannister.png/revision/latest/scale-to-width-down/323?cb=20170828071355'
    },
    {
        name: 'Tyrion Lannister',
        house: 'Lannister',
        imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/5/58/Tyrion_main_s7_e6.jpg/revision/latest?cb=20170818050344'
    }
]

const charactersBuilder = () => {
    let newString = "";
    characters.forEach((character) => {
        newString += `<div class="card character-card m-3" style="width: 18rem;">`
        newString +=    `<img class="card-img-top" src="${character.imageUrl}" style="height: 450px;" alt="Card image cap">`
        newString +=    `<div class="card-body">`
        newString +=        `<h5 class="card-title">${character.name}</h5>`
        newString +=    `</div>`
        newString += `</div>`;
    })
     printToDom(newString, 'characters');
}

export {charactersBuilder}
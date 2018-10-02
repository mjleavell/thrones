import {printToDom} from '../helpers/util.js';

const characters = [
    {
        id: 'character1',
        name: 'Daenerys Targaryen',
        house: 'Targaryen',
        imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/5/5f/Daenerys_Dragonpit.jpg/revision/latest?cb=20171015095128'
    },
    {
        id: 'character2',
        name: 'Jon Snow',
        house: 'Stark',
        imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553'
    },
    {
        id: 'character3',
        name: 'Cersei Lannister',
        house: 'Lannister',
        imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/c/c3/Profile-CerseiLannister.png/revision/latest/scale-to-width-down/323?cb=20170828071355'
    },
    {
        id: 'character4',
        name: 'Tyrion Lannister',
        house: 'Lannister',
        imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/5/58/Tyrion_main_s7_e6.jpg/revision/latest?cb=20170818050344'
    },
    {
        id: 'character5',
        name: 'Arya Stark',
        house: 'Stark',
        imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/5/54/Arya_the_dragon_and_the_wolf_s7.jpg/revision/latest/scale-to-width-down/319?cb=20170828062911'
    }
]

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
        console.log('currentCharacter', currentCharacter);

}

const createEvents = () => {
    const characterCards = document.getElementsByClassName('character-card');
    for (let i = 0; i < characterCards.length; i++) {
        characterCards[i].addEventListener('click', characterClick);
    }
}

export { charactersBuilder }
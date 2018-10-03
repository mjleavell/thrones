import {setCharacters, charactersBuilder, getCharacterz} from '../components/characters.js';

function executeThisCodeAfterFileLoaded () {
    // this = the request that called the function (this is the request itself)
    // responseText prints the object
    // console.log('request', this.responseText);
    // parse turns into object
    // opposite of parse is stringify
    const data = JSON.parse(this.responseText);
    setCharacters(data.characters);
    charactersBuilder(getCharacterz());
    // console.log('request', data.characters);
}

function executeThisCodeIfXhrFails () {
    console.log('things are broken');
}

const getCharacters = () => {
    // myrequest has all the the properties that xmlhttprequest has
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', executeThisCodeIfXhrFails);
    // what kindof request are you making and takes 2 arguments; second one is on execution what is this path??
    // get request and this is where we are getting the information from
    myRequest.open('GET', './db/characters.json');
    // send actually runs the request
    myRequest.send();
}

export {getCharacters}
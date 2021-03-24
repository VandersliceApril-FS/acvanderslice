// keep a local list of participants to manipulate
let listOfParticipants = [];
let pairs = [];

function addParticipant() {
    // create a new list item element
    let newListItem = document.createElement("LI");
    // grab input value
    let currentInputValue = document.querySelector('.participantNameInput').value;

    // add this name to an array for quick access when creating matches
    listOfParticipants.push(currentInputValue);
    // append input value to new list item element
    let t = document.createTextNode(currentInputValue);
    newListItem.appendChild(t);

    // insert new list item element into all participants list
    let allParticipants = document.getElementById('allParticipants');
    allParticipants.appendChild(newListItem);
    // clear the input field so it's ready for a new entry
    document.querySelector('.participantNameInput').value = "";
}

// when I use this line, an empty list item is already visible on the page and each name is added after it.
// so 1. is always blank
// const addNameButton = document.getElementsByClassName('submitParticipantButton').onclick = addParticipant();

// function to take the list and shuffle the names
function shuffleList(list){
    for(let i = list.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = list[i]
        list[i] = list[j];
        list[j] = temp;
    }
    return list;
}

function pairParticipants(){
    let shuffled = [];
    shuffled = shuffleList(listOfParticipants);
    shuffled.map((participant, i) => {
        let indexToMatchWith = i + 1;
        if (indexToMatchWith >= shuffled.length) {
            indexToMatchWith = 0;
        }
        pairs.push(`${shuffled[i]} buys for ${shuffled[indexToMatchWith]}.`);
    });
    // shuffle the list again so it looks more random.
    shuffleList(pairs);
    displayMatchList();
}

const drawButton = document.getElementById('drawNamesButton').onclick = pairParticipants;

function displayMatchList() {
    // loop through the matches list
    pairs.forEach((match => {
        // create an li
        let newListItem = document.createElement("LI");
        // grab item from the list and create a text node
        let itemValue = document.createTextNode(match);
        // add the text node to the list item element
        newListItem.appendChild(itemValue);
        // select the matches list and add the list item element to the html list
        document.getElementById('matchesList').appendChild(newListItem);
    }))





}











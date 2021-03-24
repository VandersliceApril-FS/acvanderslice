// keep a local list of participants to manipulate
let listOfParticipants = [];

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
    document.querySelector('.participantNameInput').value = "";
}

// when I use this line, an empty list item is already visible on the page and each name is added after it.
// so 1. is always blank
// const addNameButton = document.getElementsByClassName('submitParticipantButton').onclick = addParticipant();

// function to take the list and shuffle the names
function shuffleList(){
    for(let i = listOfParticipants.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = listOfParticipants[i]
        listOfParticipants[i] = listOfParticipants[j];
        listOfParticipants[j] = temp;
    }
    return listOfParticipants;
}

function pairParticipants(shuffled){
    let pairs = [];
    shuffled.map((participant, i) => {
        let indexToMatchWith = i + 1;
        if (indexToMatchWith >= shuffled.length) {
            indexToMatchWith = 0;
        }
        pairs.push(`${shuffled[i]} buys for ${shuffled[indexToMatchWith]}.`);
    });
    // shuffle the list again so it looks more random.
    return shuffleList(pairs);
}

const drawButton = document.getElementById('drawNamesButton').onclick = shuffleList;
console.log(shuffleList());















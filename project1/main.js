// user can:
// enters names of people participating in gift exchange
// click a button called "Draw Names"
// See the list of names shuffled and matched with one other names
// clear the list and start over
// reshuffle the list by clicking "Draw Names"

const allParticipantsList = [];
let newParticipant;
let numParticipants;

numParticipants = parseInt(prompt('How many people are participating in the gift exchange? (must be positive number)'));
while(numParticipants % 2 !== 0) {
    alert('Number of participants must be positive.');
    numParticipants = parseInt(prompt('How many people are participating in the gift exchange?'));
}

while(isNaN(numParticipants) || numParticipants === '') {
    numParticipants = prompt('Please enter a positive number. How many people are participating in the gift exchange?');
}

for(let i = 0; i<numParticipants; i++) {
    newParticipant = prompt('Enter participant\'s full name');
    while(newParticipant === "") {
        newParticipant = prompt('Entry cannot be blank. Enter participant\'s full name');
    }
    allParticipantsList.push(newParticipant);
}

function displayGroup(list){
    console.log('people participating in your gift exchange:')
    for(let i = 0; i < list.length; i++) {
        console.log(`${list[i]}`);
    }
}
displayGroup(allParticipantsList);

// shuffle the participants
function shuffleList(list){

    for(let i = list.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = list[i]
        list[i] = list[j];
        list[j] = temp;
    }
    return list;
}
console.log(shuffleList(allParticipantsList));

function pairParticipants(shuffled){
    let pairs = [];
    shuffled.map((participant, i) => {
        let indexToMatchWith = i + 1;
        if (indexToMatchWith >= shuffled.length) {
            indexToMatchWith = 0;
        }
        pairs.push(`${shuffled[i]} buys for ${shuffled[indexToMatchWith]}.`);
    });
    return pairs;
}
displayGroup(pairParticipants(shuffleList(allParticipantsList)));












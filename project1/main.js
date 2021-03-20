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
while(numParticipants % 2 != 0) {
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

console.log(allParticipantsList);
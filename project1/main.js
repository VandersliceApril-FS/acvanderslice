// FUNCTIONS:
function toTitleCase(properNoun) {
    let firstChar = properNoun.charAt(0);
    return firstChar.toUpperCase() + properNoun.slice(1);
}
function displayList(list, message){
    console.log(`\r\n${message.toUpperCase()}\r\n--------------------------------`)
    for(let i = 0; i < list.length; i++) {
        console.log(`${list[i]}`);
    }
}
function shuffleList(list){
    for(let i = list.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = list[i]
        list[i] = list[j];
        list[j] = temp;
    }
    return list;
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

// Explain app to the user
console.info('SECRET SANTA APP');
console.info('===========================================================')
console.info('Use this app to virtually draw names for your gift exchange.')

// Alert also explains app to user in case JavaScript console isn't already open in the browser and above info cannot be seen
alert('Secret Santa App\r\n' +
    '==================================================\r\n' +
    'Use this app to virtually draw names for your gift exchange.')

const allParticipantsList = [];
let newParticipant;
let numParticipants;

// enter names of people participating in gift exchange
numParticipants = parseInt(prompt('How many people are participating in the gift exchange? (must be an even number)'));
while(numParticipants % 2 !== 0) {
    alert('Entry must be an even number.');
    numParticipants = parseInt(prompt('How many people are participating in the gift exchange?'));
}
// validate entry wasn't left blank or wasn't a number
while(isNaN(numParticipants) || numParticipants === '') {
    numParticipants = prompt('Please enter an even number. How many people are participating in the gift exchange?');
}

for(let i = 0; i<numParticipants; i++) {
    newParticipant = prompt(`Enter full name for participant ${i+1}:`);
    while(newParticipant === "") {
        newParticipant = prompt(`Entry cannot be blank. Enter full name for participant ${i+1}: `);
    }
    newParticipant = toTitleCase(newParticipant);
    allParticipantsList.push(newParticipant);
}

displayList(allParticipantsList, 'Participants:');

// grab the participant list, shuffle it, pair participants, display pairs to the console.
displayList(pairParticipants(shuffleList(allParticipantsList)), 'Matches:');












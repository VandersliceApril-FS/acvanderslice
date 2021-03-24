function addParticipant() {
    // create a new list item element
    let newListItem = document.createElement("LI");
    // grab input value
    let currentInputValue = document.querySelector('.participantNameInput').value;
    // append input value to new list item element
    let t = document.createTextNode(currentInputValue);
    newListItem.appendChild(t);

    // insert new list item element into all participants list
    let allParticipants = document.getElementById('allParticipants');
    allParticipants.appendChild(newListItem);
    document.querySelector('.participantNameInput').value = "";
}
// const addNameButton = document.getElementsByClassName('submitParticipantButton').onclick = addParticipant();













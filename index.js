let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeSc = 0;
let guestSc = 0;

function submitNames(){
    let team1Name = document.getElementById("team1-name").value;
    let team2Name = document.getElementById("team2-name").value;
    let display1 = document.getElementById("display-mame1");
    let display2 = document.getElementById("display-mame2");
    display1.innerText = team1Name;
    display2.innerText = team2Name;
}
function resetScore() {
    // Reset the scores to 0
    homeSc = 0;
    guestSc = 0;

    // Update the displayed scores
    homeScore.innerText = homeSc;
    guestScore.innerText = guestSc;
}

function homeOne() {
    homeSc = homeSc + 1;
    homeScore.innerText = homeSc;
}

function homeTwo() {
    homeSc = homeSc + 2;
    homeScore.innerText = homeSc;
}

function homeThree() {
    homeSc = homeSc + 3;
    homeScore.innerText = homeSc;
}
function homeMinusOne() {
    homeSc = homeSc - 1;
    homeScore.innerText = homeSc;
}

function homeMinusTwo() {
    homeSc = homeSc - 2;
    homeScore.innerText = homeSc;
}

function homeMinusThree() {
    homeSc = homeSc - 3;
    homeScore.innerText = homeSc;
}


function guestOne() {
    guestSc = guestSc + 1;
    guestScore.innerText = guestSc;
}

function guestTwo() {
    guestSc = guestSc + 2;
    guestScore.innerText = guestSc;
}

function guestThree() {
    guestSc = guestSc + 3;
    guestScore.innerText = guestSc;
}
function guestMinusOne() {
    guestSc = guestSc - 1;
    guestScore.innerText = guestSc;
}

function guestMinusTwo() {
    guestSc = guestSc - 2;
    guestScore.innerText = guestSc;
}

function guestMinusThree() {
    guestSc = guestSc - 3;
    guestScore.innerText = guestSc;
}
let homeScoreEl = document.getElementById("home-score");
let homeScore = 0
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0
// let resetEl = document.getElementById("reset-el")
// let resetScore = 0

function plusScoreOne() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function plusScoreTwo() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function plusScoreThree() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function plusOne() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function plusTwo() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function plusThree() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function resetScore() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}
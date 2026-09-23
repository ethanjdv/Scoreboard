/* =========================
GAME VARIABLES
========================= */

let player1 = "";
let player2 = "";

let raceLength = 7;

let breaker = "";

let score1 = 0;
let score2 = 0;

/* =========================
GET HTML ELEMENTS
========================= */

const setupScreen =
document.getElementById("setup-screen");

const scoreboardScreen =
document.getElementById("scoreboard-screen");

const player1Input =
document.getElementById("player1");

const player2Input =
document.getElementById("player2");

const raceLengthInput =
document.getElementById("race-length");

const player1Name =
document.getElementById("player1-name");

const player2Name =
document.getElementById("player2-name");

const score1Display =
document.getElementById("score1");

const score2Display =
document.getElementById("score2");

const raceDisplay =
document.getElementById("race-display");

const breakerDisplay =
document.getElementById("breaker-display");

/* =========================
START MATCH
========================= */

function startMatch() {

```
player1 =
    player1Input.value.trim();

player2 =
    player2Input.value.trim();


/* Check names */

if (!player1 || !player2) {

    alert(
        "Please enter both player names."
    );

    return;
}


/* Get race length */

raceLength =
    parseInt(
        raceLengthInput.value
    );


if (
    isNaN(raceLength) ||
    raceLength <= 0
) {

    alert(
        "Please enter a valid race length."
    );

    return;
}


/* Get first breaker */

const breakerChoice =
    document.querySelector(
        'input[name="breaker"]:checked'
    ).value;


if (breakerChoice === "player1") {

    breaker = player1;

} else {

    breaker = player2;

}


/* Reset scores */

score1 = 0;
score2 = 0;


/* Update names */

player1Name.textContent =
    player1.toUpperCase();

player2Name.textContent =
    player2.toUpperCase();


/* Update race */

raceDisplay.textContent =
    "RACE TO " + raceLength;


/* Update scoreboard */

updateScoreboard();


/* Switch screens */

setupScreen.style.display = "none";

scoreboardScreen.style.display = "block";
```

}

/* =========================
ADD POINT
========================= */

function addPoint(player) {

```
/*
   Prevent scoring after
   someone reaches the race.
*/

if (
    score1 >= raceLength ||
    score2 >= raceLength
) {
    return;
}


/* Add point */

if (player === 1) {

    score1++;

} else {

    score2++;

}


/* Switch breaker */

if (breaker === player1) {

    breaker = player2;

} else {

    breaker = player1;

}


/* Update screen */

updateScoreboard();


/* Check winner */

if (score1 >= raceLength) {

    alert(
        "🏆 " +
        player1 +
        " wins!\n\n" +
        score1 +
        " - " +
        score2
    );

} else if (
    score2 >= raceLength
) {

    alert(
        "🏆 " +
        player2 +
        " wins!\n\n" +
        score2 +
        " - " +
        score1
    );

}
```

}

/* =========================
REMOVE POINT
========================= */

function removePoint(player) {

```
if (player === 1) {

    if (score1 > 0) {

        score1--;

    }

} else {

    if (score2 > 0) {

        score2--;

    }

}


updateScoreboard();
```

}

/* =========================
UPDATE SCOREBOARD
========================= */

function updateScoreboard() {

```
score1Display.textContent =
    score1;

score2Display.textContent =
    score2;

breakerDisplay.textContent =
    "● BREAK: " + breaker;
```

}

/* =========================
RESET SCORE
========================= */

function resetMatch() {

```
const answer =
    confirm(
        "Reset both scores to 0?"
    );


if (answer) {

    score1 = 0;
    score2 = 0;

    updateScoreboard();

}
```

}

/* =========================
NEW MATCH
========================= */

function newMatch() {

```
/* Show setup */

scoreboardScreen.style.display =
    "none";

setupScreen.style.display =
    "block";


/* Clear names */

player1Input.value = "";

player2Input.value = "";


/* Reset race */

raceLengthInput.value = 7;


/* Reset breaker */

document.querySelector(
    'input[value="player1"]'
).checked = true;


/* Reset variables */

player1 = "";
player2 = "";

raceLength = 7;

breaker = "";

score1 = 0;
score2 = 0;
```

}

/* =========================
BUTTON EVENTS
========================= */

document
.getElementById("start-button")
.addEventListener(
"click",
startMatch
);

document
.getElementById("player1-add")
.addEventListener(
"click",
function () {
addPoint(1);
}
);

document
.getElementById("player1-remove")
.addEventListener(
"click",
function () {
removePoint(1);
}
);

document
.getElementById("player2-add")
.addEventListener(
"click",
function () {
addPoint(2);
}
);

document
.getElementById("player2-remove")
.addEventListener(
"click",
function () {
removePoint(2);
}
);

document
.getElementById("reset-button")
.addEventListener(
"click",
resetMatch
);

document
.getElementById("new-match-button")
.addEventListener(
"click",
newMatch
);

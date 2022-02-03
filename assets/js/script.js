let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('userScore');
const compScore_span = document.getElementById('compScore');
const output = document.querySelectorAll('.result-output');
const resultMessage = document.querySelectorAll('.result-message');
const pin = document.getElementById('pin');
const balloon = document.getElementById('balloon');
const hair = document.getElementById('hair');


function getCompChoice() {
    const choices = ['pin', 'balloon', 'hair'];
    let randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}
console.log(getCompChoice());

function winner() {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
}

function loser() {
    console.log('win');
}

function draw() {
    console.log('win');
}

function game(userChoice) {
    const computerChoice = getCompChoice();
    const name = "pine";
    switch (userChoice + computerChoice) {
        case "pinballon":
        case "balloonhair":
        case "hairpin":
            winnner();
            break;
        case "pinhair":
        case "hairballoon":
        case "balloonpin":
            loser();
            break;
        case "pinpin":
        case "balloonballoon":
        case "hairhair":
            draw();
            break;
    }
}

/* User Pick*/
function mainGame() {
    pin.addEventListener('click', function () {
        game('pin')
    })
    balloon.addEventListener('click', function () {
        game('balloon')
    })
    hair.addEventListener('click', function () {
        game('hair')
    })
}
mainGame();
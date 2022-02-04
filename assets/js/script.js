let userScore = 0;
let compScore = 0;
const userScore_p = document.getElementById('userScore');
const compScore_p = document.getElementById('compScore');
const userPick = document.getElementById('userPick');
const userOutput = document.querySelectorAll('result-output');
const resultMessage = document.querySelectorAll('result-message > p');
const pin = document.getElementById('pin');
const balloon = document.getElementById('balloon');
const hair = document.getElementById('hair');


pin.addEventListener('click', function () {
    console.log('pin');
})
balloon.addEventListener('click', function () {
    console.log('balloon');
})
hair.addEventListener('click', function () {
    console.log('hair');
})

function computerPick() {
    const choices = ['pin', 'balloon', 'hair'];
    let randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function userPick() {
    const choices = ['pin', 'balloon', 'hair'];
    if (choices === pin) {
        const content = document.getElementsById('user-pick');

    }
}

function loss();

function draw();

function winner();

function vsComp();




console.log(getCompChoice());

function winner(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    output.innerHTML = userChoice + "defeats" + computerChoice + "You win!";
}

function game(userChoice) {
    const computerChoice = getCompChoice();
    switch (userChoice + computerChoice) {
        case "pinballon":
        case "balloonhair":
        case "hairpin":
            winnner(userChoice, computerChoice);
            break;
        case "pinhair":
        case "hairballoon":
        case "balloonpin":
            loser(userChoice, computerChoice);
            break;
        case "pinpin":
        case "balloonballoon":
        case "hairhair":
            draw(userChoice, computerChoice);
            break;
    }
}

function runGame() {
    pin.addEventListener('click', function () {
        game('pin');
    })
    balloon.addEventListener('click', function () {
        game('balloon');
    })
    hair.addEventListener('click', function () {
        game('hair');
    })
}
runGame();
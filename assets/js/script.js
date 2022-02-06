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
    console.log('You have chosen pin!');
})
balloon.addEventListener('click', function () {
    console.log('You have chosen balloon!');
})
hair.addEventListener('click', function () {
    console.log('You have chosen hair!');
})



function userPicker(computerPick) {
    const choices = ['pin', 'balloon', 'hair'];
    if (choices === pin) {
        document.getElementById("userPick").innerHTML = pin;
    } else if (choices === balloon) {
        document.getElementById("userPick").innerHTML = balloon;
    } else if (choices === hair) {
        document.getElementById("userPick").innerHTML = hair;
    }
    return null;
}

function loss() {
    compScore++;
    compScore_p.innerHTML = compScore;
};

function draw() {

};

function winner() {
    userScore++;
    userScore_p.innerHTML = userScore;
};

function vsComp() {

};

function computerPick() {
    const choices = ['pin', 'balloon', 'hair'];
    let randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function game() {
    const computerChoice = computerPick();
    cnosole.log("user choice => " + userPick);
    console.log("computer pick => +" + computerPick);
}

/* function game(userPick) {
    const computerChoice = computerPick();
    switch (userPick + computerPick) {
        case "pinballon":
        case "balloonhair":
        case "hairpin":
            winnner(userPick, computerPick);
            break;
        case "pinhair":
        case "hairballoon":
        case "balloonpin":
            loser(userPick, computerPick);
            break;
        case "pinpin":
        case "balloonballoon":
        case "hairhair":
            draw(userPick, computerChoice);
            break;
    }
}
*/
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
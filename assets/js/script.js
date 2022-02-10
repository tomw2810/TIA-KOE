let userScore = 0;
let compScore = 0;
const userScore_p = document.getElementById('u-s');
const compScore_p = document.getElementById('c-s');
const pin = document.getElementById('pin');
const balloon = document.getElementById('balloon');
const hair = document.getElementById('hair');


pin.addEventListener('click', function () {
    let pinActive = document.getElementById('u-p');
    pinActive.innerHTML = 'pin!';
});
balloon.addEventListener('click', function () {
    let balloonActive = document.getElementById('u-p');
    balloonActive.innerHTML = 'balloon!';
});
hair.addEventListener('click', function () {
    let hairActive = document.getElementById('u-p');
    hairActive.innerHTML = 'hair!';
});

function runGame() {
    pin.addEventListener('click', function () {
        game('pin');
    });
    balloon.addEventListener('click', function () {
        game('balloon');
    });
    hair.addEventListener('click', function () {
        game('hair');
    });
}
runGame();



function userPicker(computerPick) {
    const choices = ['pin', 'balloon', 'hair'];
    if (choices === pin) {
        document.getElementById("user-pick").innerHTML = pin;
    } else if (choices === balloon) {
        document.getElementById("user-pick").innerHTML = balloon;
    } else if (choices === hair) {
        document.getElementById("user-pick").innerHTML = hair;
    }
}



/* COMPUTER CHOICE */
function computerPick() {
    const choices = ['pin', 'balloon', 'hair'];
    let randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = computerPick();
    switch (userChoice + computerChoice) {
        case "pinballon":
        case "balloonhair":
        case "hairpin":
            determineWinner(computerChoice, userChoice, "user");
            break;
        case "pinhair":
        case "hairballoon":
        case "balloonpin":
            determineWinner(computerChoice, userChoice, "computer");
            break;
        case "pinpin":
        case "balloonballoon":
        case "hairhair":
            determineWinner(computerChoice, userChoice, "draw");
            break;
    }

}

function determineWinner(computerChoice, userChoice, winner) {
    switch (winner) {
        case "computer":
            compScore++;
            compScore_p.innerHTML = compScore;
            document.getElementById('outcome-text').innerHTML = 'You lose that round!';
            break;
        case "user":
            userScore++;
            userScore_p.innerHTML = userScore;
            document.getElementById('outcome-text').innerHTML = 'You win that round!';
            break;
        case "draw":
            document.getElementById('outcome-text').innerHTML = 'You draw that round!';
            break;

    }
    document.getElementById('c-p').innerHTML = computerChoice;
    document.getElementById('u-p').innerHTML = userChoice;
}
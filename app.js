let lowNum = document.querySelector("#low-num"),
    highNum = document.querySelector("#high-num"),
    input = document.querySelector("#input"),
    submit = document.querySelector("#submit"),
    message = document.querySelector("#conf-msg"),
    turnCounter = 0,
    secretNum = Math.floor(Math.random() * 10 + 1);
    
submit.addEventListener('click', runGame);

function runGame(e) {
    if (turnCounter === 0) {
        if (parseInt(input.value) === secretNum) {
            message.textContent = "Congratulations, you win!";
            message.style.color = 'green';

        }
        else {
            message.textContent = "Nope, you have 2 more guesses left.";
            message.style.color = 'red';
        }
        turnCounter++;
        e.preventDefault();
    };

}
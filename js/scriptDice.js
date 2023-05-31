console.log('JS OK');

/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare (in console)*/


//get element from DOM

const buttonElement = document.getElementById('playbtn');

// where the fun starts

buttonElement.addEventListener("click", function(){

    // get element from DOM

    const userParagraph = document.getElementById('user-number');
    const cpuParagraph = document.getElementById('cpu-number');
    const resultParagraph = document.getElementById('results');

    // make random numbers for user

    const randomUserNumbers = parseInt(Math.floor(Math.random() * 6) + 1);

    // make random numbers for cpu

    const randomCpuNumbers = parseInt(Math.floor(Math.random() * 6) + 1);

    // print numbers to the DOM

    userParagraph.innerText = "Your number: " + randomUserNumbers;
    cpuParagraph.innerText = "My number: " + randomCpuNumbers;

    // make the winner of the game

    if (randomCpuNumbers > randomUserNumbers) {
        resultParagraph.innerText = "I win! try your luck again";
      } else if (randomCpuNumbers < randomUserNumbers) {
        resultParagraph.innerText = "Congratulation, you win!";
      } else {
        resultParagraph.innerText = "It's a tie!";
      }

});

 
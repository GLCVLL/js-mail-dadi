console.log('JS OK')

//**************  EMAIL GAME  **************//

/*- Inventiamo una lista di email a nostro piacimento
- Chiediamo all'utente una mail (con un prompt)
- controlliamo che la mail inserita sia presente nella lista
- se è presente, gli diamo il benvenuto. (in console)
- altrimenti gli diciamo che non può accedere (in console)
- non potete usare il metodo .includes())*/

// Sample email list

const emailList = ["example1@example.com", "example2@example.com", "example3@example.com", "example4@example.com", "example5@example.com"];

// Get the check button element

const checkButton = document.getElementById("checkButton");

// Add click event listener to the button

checkButton.addEventListener("click", function(){

  // Get the email input value

  const userEmail = document.getElementById("emailInput").value;

  // Check if the email is present in the list

  let isPresent = false;
  for (let i = 0; i < emailList.length; i++) {
    if (emailList[i] === userEmail) {
      isPresent = true;
    }
  }

  // Get the result element

  const resultElement = document.getElementById("result");

  // Print the result on the DOM

  if (isPresent) {
    resultElement.textContent = "EH EH EH welcome, STRANGER!";
  } else {
    resultElement.textContent = "You can't log in, STRANGER!";
  }
});
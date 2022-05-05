let realAge = parseInt(prompt("Enter your Real Age"));
let guessAge = parseInt(prompt("Guess the Real Age"));

function checkAge(){
    if(realAge == guessAge){
      alert("Great Job, you guess it right")
        return;
    }
    (realAge > guessAge) ? alert("Enter a higer age") : alert("Enter a lower age");
    guessAge = parseInt(prompt("Guess the Real Age"));
    checkAge()
}

checkAge();

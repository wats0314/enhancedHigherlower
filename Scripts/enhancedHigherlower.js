


let yourNumber = Number(Math.round(prompt("Guess a number between 1 and (enter your choice)", "0")));

console.log("your number rounded = " + yourNumber)

function checkNumber(){
    while (isNaN(yourNumber)){
        yourNumber = Number(Math.round(prompt("enter a number not words)", "0")));
    }
}
function greaterThan(){
        while (yourNumber < 1){
        yourNumber = Number(Math.round(prompt("Guess a number between 1 and (enter your choice)", "0")));
        }
}
  
    




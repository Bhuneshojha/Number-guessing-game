console.log("guess a number between 1 to 15");
// --Creating varriables
let a = Math.floor(Math.random() * 15);
import inquirer from "inquirer";
while (true) {
    let input = await inquirer.prompt({ name: "guess", type: "number",
        message: "Enter your guess number:" });
    let ans = input.guess;
    if (a == ans) {
        console.log("Congratualation your guess number is correct!");
        break;
    }
    else {
        console.log("Sorry try again.");
    }
    // -- Adding hint
    if (a > ans) {
        console.log("Hint: number is higher");
    }
    else {
        console.log("Hint: number is lower");
    }
    console.log("Game Over!");
}

#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.greenBright("\tWelcome to my CLI Calculator!"));
console.log(chalk.bold.greenBright("\tLet's do some calculations!\n"));
const answer = await inquirer.prompt([
    { message: chalk.cyanBright("Enter first number: "), type: "number", name: "FirstNumber" },
    { message: chalk.cyanBright("Enter second number: "), type: "number", name: "SecondNumber" },
    {
        message: chalk.greenBright("Select operator to perform operation: "),
        type: "list",
        choices: [
            chalk.yellowBright("Addition"),
            chalk.yellowBright("Subtraction"),
            chalk.yellowBright("Multiplication"),
            chalk.yellowBright("Division"),
        ],
        name: "Operator",
    },
]);
if (answer.Operator === chalk.yellowBright("Addition")) {
    console.log(chalk.yellowBright(`Result: ${answer.FirstNumber + answer.SecondNumber}`));
}
else if (answer.Operator === chalk.yellowBright("Subtraction")) {
    console.log(chalk.yellowBright(`Result: ${answer.FirstNumber - answer.SecondNumber}`));
}
else if (answer.Operator === chalk.yellowBright("Multiplication")) {
    console.log(chalk.yellowBright(`Result: ${answer.FirstNumber * answer.SecondNumber}`));
}
else if (answer.Operator === chalk.yellowBright("Division")) {
    console.log(chalk.yellowBright(`Result: ${answer.FirstNumber / answer.SecondNumber}`));
}
else {
    console.log(chalk.redBright("Please select a valid operator!"));
}
console.log(chalk.bold.magentaBright("\n\tThanks for using my CLI Calculator!"));
console.log(chalk.bold.magentaBright("\tHope to see you back for more calculations soon!"));

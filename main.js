#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // DOLLAR
let myPin = 1659;
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        message: "Enter your pin code",
        type: "number"
    }
]);
if (pinAnswer.Pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "Operation",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Check Balance"]
        }
    ]);
    console.log(operationAnswer);
    if (operationAnswer.Operation === "Withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "Amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAnswer.Amount > myBalance) {
            console.log("Insufficient balance");
        }
        else {
            myBalance -= amountAnswer.Amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAnswer.Operation === "Check Balance") {
        console.log("Your current balance is" + myBalance);
    }
    else if (operationAnswer.Operation === "Fast Cash") {
        let fast = await inquirer.prompt([
            {
                name: "FastCash",
                message: "Select the amount which you want to withdraw",
                type: "list",
                choices: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
            }
        ]);
        myBalance -= fast.FastCash;
        console.log(`You have successfully withdrawl ${fast.FastCash} and your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}

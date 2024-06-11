#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\tTop 5 countries currency converter for Pakistanies\t\n"));
//for the list containing currencies with exchange rates
let excahnge_rate = {
    //always use curly brackets to create obj
    //key value pair data
    "KWD": 1, //Kuwaiti Dinar
    "BHD": 1.23, //Bahraini Dinar
    "GBP": 2.56, //British pound
    "EUR": 3.02, //Euro
    "USD": 3.26, //United States Dollar
    "PKR": 908, //Pakistani Rupee
};
//promt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        //to take input of user desire currency to be convert
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["KWD", "BHD", "GBP", "EUR", "USD", "PKR"],
    },
    {
        //to take input of user desire currency converted into
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["KWD", "BHD", "GBP", "EUR", "USD", "PKR"],
    },
    {
        //amount to be converted
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:",
    },
]);
//perform currency conversion by using formula
//to save converting currency
let from_amount = excahnge_rate[user_answer.from_currency];
//to save coverted into curency
let to_amount = excahnge_rate[user_answer.to_currency];
//to save amount to change 
let amount = user_answer.amount;
//Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//To show converted value
console.log(`${user_answer.amount} ${user_answer.from_currency} equals to ${converted_amount.toFixed(3) /*to show 3 values after decimal*/} ${user_answer.to_currency}`);

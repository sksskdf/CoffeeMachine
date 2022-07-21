// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
let input = require('sync-input');

let start = true;
let water = 400;
let milk = 540;
let coffeeBeans = 120;
let disposable = 9;
let money = 550;

function checkAndMakeCoffee(type) {
    switch (type) {
        case 1 : {
            if (water < 250) {
                console.log(`Sorry, not enough water!`);
                break;
            } else if (coffeeBeans < 16) {
                console.log(`Sorry, not enough coffee beans!`);
            } else {
                console.log(`I have enough resources, making you a coffee!`);
                water -= 250;
                coffeeBeans -= 16;
                disposable -= 1;
                money += 4;
            }
            break;
        } case 2 : {
            if (water < 350) {
                console.log(`Sorry, not enough water!`);
            } else if (milk < 75) {
                console.log(`Sorry, not enough milk!`);
            } else if (coffeeBeans < 20) {
                console.log(`Sorry, not enough coffee beans!`);
            } else {
                console.log(`I have enough resources, making you a coffee!`);
                water -= 350;
                milk -= 75;
                coffeeBeans -= 20;
                disposable -= 1;
                money += 7;
            }
            break;
        } case 3 : {
            if (water < 200) {
                console.log(`Sorry, not enough water!`);
            } else if (milk < 100) {
                console.log(`Sorry, not enough milk!`);
            } else if (coffeeBeans < 20) {
                console.log(`Sorry, not enough coffee beans!`);
            } else {
                water -= 200;
                milk -= 100;
                coffeeBeans -= 12;
                disposable -= 1;
                money += 6;
                console.log(`I have enough resources, making you a coffee!`);
            }
            break;
        }
    }
}
while (start) {
    let action = input("Write action (buy, fill, take, remaining, exit):\n");

    switch (action) {
        case 'buy' : {
            let buy = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");

            switch (buy) {
                case '1' : {
                    checkAndMakeCoffee(1);
                    break;
                }
                case '2' : {
                    checkAndMakeCoffee(2)
                    break;
                }
                case '3' : {
                    checkAndMakeCoffee(3);
                    break;
                } case 'back' : {
                    break;
                }
            }
            break;
        } case 'fill' : {
            let waterToFill = Number(input("Write how many ml of water you want to add:\n"));
            let milkToFill = Number(input("Write how many ml of milk you want to add:\n"));
            let coffeeBeansToFill = Number(input("Write how many grams of coffee beans you want to add:\n"));
            let disposableToFill = Number(input("Write how many disposable coffee cups you want to add:\n"));

            water += waterToFill;
            milk += milkToFill;
            coffeeBeans += coffeeBeansToFill;
            disposable += disposableToFill;
            break;
        } case 'take' : {
            money -= money;
            break;
        } case 'remaining' : {
            console.log(`The coffee machine has:
${water} ml of water
${milk} ml of milk
${coffeeBeans} g of coffee beans
${disposable} disposable cups
$${money} of money
`);
            break;
        } case 'exit' : {
            start = false;
            break;
        }
    }
}

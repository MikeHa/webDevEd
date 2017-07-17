/*
* Write a program to calculate the total price of your phone purchase.
You will keep purchasing phones (hint: loop!) until you   run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
* After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
* Finally, check the amount against your bank account balance to see if you can afford it or not.
* You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
* You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
* Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!
*/

/* Semi PseudoCode
 - Notes: Consider running down the balance of the bank account until it reaches the spending threshold.

// CONSTANTS
const TAX_RATE_MULTIPLIER = 1.09;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 14.99;
const SPENDING_THRESHOLD = 10.00 // will not buy if there is less than $10.00 in the account
var bankAccount = prompt(“How much money do you have in your bank account”);

numPhones = 0;
function buyLotsofPhones {
    for (i = 0; i(number of phones) < bankAccount-SPENDING_THRESHOLD/((PHONE_PRICE+ACCESSORY_PRICE)*TAX_RATE_MULTIPLIER); i++) // determine number of phones we can purchase
      numPhones++;
}

function totalPrice(number of phones) {
   var totalPrice = (number of phones) * (PHONE_PRICE + ACCESSORY PRICE) * TAX_RATE_MULTIPLIER;
   return totalPrice.toFixed(2);
}

totalPrice(numPhones);

*/


// CONSTANTS

const TAX_RATE_MULTIPLIER = 1.09;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 14.99
const SPENDING_THRESHOLD = 10.00 // purchase will stop if there is less than $10 in the account

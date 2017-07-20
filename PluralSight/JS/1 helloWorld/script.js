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
const ACCESSORY_PRICE = 14.99;
const SPENDING_THRESHOLD = 10.00; // purchase will stop if there is less than $10 in the account

// VARIABLES
var bankAccount = prompt("How much money do you have in your entire bank account?");
var pricePerPhoneAndAccessory = (PHONE_PRICE + ACCESSORY_PRICE) * TAX_RATE_MULTIPLIER;
pricePerPhoneAndAccessory = pricePerPhoneAndAccessory.toFixed(2);
var numPhones = 0; // initial number of phones

function buyLotsofPhones() {
	for (i = 0; i < (Math.floor((bankAccount - SPENDING_THRESHOLD) / pricePerPhoneAndAccessory)); i++) {
		numPhones++;
	}
}
buyLotsofPhones();
var totalPrice = (numPhones * pricePerPhoneAndAccessory).toFixed(2);
var leftOver = bankAccount - totalPrice;

if (numPhones > 0){
	alert("That'll be $" + totalPrice + " for " + numPhones + " Phones with Accessories, please! " + "And you will have $" + leftOver.toFixed(2) + " left over in your bank account!");
}
else {
	alert("Sorry, you don't have enough money for these goods!  SCRAM!")
}

// Took about an hour.  First actual functional program.  Committing here and will post up Kyle Simpson's solution commented below.
// Kyle's code is far more simple than mine was.  He created functions to calculate the tax and to format the amount.  Then he made a while loop to continue buying phones while the bank account still had enough money for the phone and the accessory.  Then he added in the tax to the amount and then console.log'd it.  Then he ran a if statement to display that you couldn't afford it, if the items + tax exceeded the value of your bank account.

/* Kyle Simpson's Solution

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
	return amount * TAX_RATE;
}

function formatAmount(amount) {
	return "$" + amount.toFixed( 2 );
}

// keep buying phones while you still have money
while (amount < bank_balance) {
	// buy a new phone!
	amount = amount + PHONE_PRICE;

	// can we afford the accessory?
	if (amount < SPENDING_THRESHOLD) {
		amount = amount + ACCESSORY_PRICE;
	}
}

// don't forget to pay the government, too
amount = amount + calculateTax( amount );

console.log(
	"Your purchase: " + formatAmount( amount )
);
// Your purchase: $334.76

// can you actually afford this purchase?
if (amount > bank_balance) {
	console.log(
		"You can't afford this purchase. :("
	);
}
// You can't afford this purchase. :(


*/

// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map
phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '510-457-5377');
phoneNumbers.set('business', '510-801-5359');


// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information
function printAccount(accountHolder, accountNumber, businessName) {
	console.log("Account Holder Name: ", accountHolder);
	console.log("Account Holder Number: ", accountNumber);
	console.log("Business Name: ", businessName);
}


// Add function to print all addresses, including a header
function printAddresses(addresses) {
	console.log("Addresses:");
	for (let address of addresses) {
		console.log(address);
	}
}


// Add function to print phone types and numbers
function printPhoneNums(phoneNumbers) {
	for (let num of phoneNumbers) {
		console.log(num[0], ': ', num[1]);
	}
}


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions

const transactions = new Map();


// Add function to add transactions

function addTransaction(date, deltaFunds) {
	transactions.set(date, deltaFunds);
}


// Use the function to add transactions

addTransaction('May-2',-500);
addTransaction('May-13',1200);
addTransaction('May-15',-100);
addTransaction('May-21',-359);
addTransaction('May-29',2200);


// Add function to show balance status
function showBalanceStatus(balance) {
	console.log('Current balance:', balance);
	if (balance < 0) {
		console.log('YOU ARE OVERDRAWN :C');
	}
	else if (balance > 0 && balance < 20) {
		console.log('Warning, you are close to zero balance :0');
	}
	else {
		console.log('Thank you for your business :)');
	}
}

// Add function to show transactions
function showTransactions(transactions, balance) {
	let transactType = 'None';
	let currentBalance = balance;

	console.log('Start balance:', balance);

	for (let transaction of transactions) {
		if (transaction < 0) {
			transactType = 'WITHDRAWAL';
		}
		else {
			transactType = 'DEPOSIT';
		}
		currentBalance = currentBalance - transaction[1];
 		console.log(transaction[0],transactType,transaction[1],currentBalance);
	}

	if (currentBalance < 0) {
		currentBalance -= 25;
		console.log('Oops. Your balance is below zero. You are being charged.');
	}

	console.log('Your final balance is:', currentBalance);
}


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours





var customerName = "bob";
var bestCustomer;

// declare customerName to be bob in global scope
// Fix the Scope
//        upperCaseCustomerName()
//          modifies the customerName variable:

//       AssertionError: expected 'bob' to equal 'BOB'
//       + expected - actual

//       -bob
//       +BOB

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// function upperCaseCustomerName() {
//   return customerName.toUpperCase();
// }


// setBestCustomer
function setBestCustomer() {
  bestCustomer = "not bob";
}

// overwriteBestCustomer: overwrites the best customer
function overwriteBestCustomer() {
  return bestCustomer = "maybe bob";
}

// changeLeastFavoriteCustomer: unsuccessfully tries to reassign the least favorite customer
const leastFavoriteCustomer = "bob";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "not bob";
}
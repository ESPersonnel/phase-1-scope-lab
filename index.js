var customerName = "bob";
var bestCustomer;

function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  return bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "bob";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "not bob";
}
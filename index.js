var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "new least favorite customer";
}
function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = "new least favorite customer";
  } catch (error) {
    throw error;
  }
}
function changeLeastFavoriteCustomer() {
  throw new Error("Assignment to constant variable.");
}

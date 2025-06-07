// form-demo.js

function validateForm(event) {
  const theForm = event.target;
  const errors = [];
  let isValid = true;

  // Validation: Only allow 'Bob' as the full name
  if (theForm.fullName.value !== "Bob") {
    isValid = false;
    errors.push("Your name must be Bob.");
  }

  // Validation: Only allow this credit card number if method is credit card
  if (
    theForm.paymentMethod.value === "creditCard" &&
    theForm.creditCardNumber.value !== "1234123412341234"
  ) {
    isValid = false;
    errors.push("Invalid credit card number.");
  }

  if (!isValid) {
    event.preventDefault();
    showErrors(errors);
    return false;
  }
}

function togglePaymentDetails(e) {
  const theForm = document.querySelector("#checkoutForm");
  const creditCardContainer = document.getElementById("creditCardNumberContainer");
  const paypalContainer = document.getElementById("paypalUsernameContainer");

  // Hide both containers
  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");

  // Disable both fields
  theForm.creditCardNumber.required = false;
  theForm.paypalUsername.required = false;

  // Enable the selected payment method’s field
  if (theForm.paymentMethod.value === "creditCard") {
    creditCardContainer.classList.remove("hide");
    theForm.creditCardNumber.required = true;
  } else if (theForm.paymentMethod.value === "paypal") {
    paypalContainer.classList.remove("hide");
    theForm.paypalUsername.required = true;
  }
}

function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}

// Event listeners
document
  .querySelector("#paymentMethod")
  .addEventListener("change", togglePaymentDetails);

document
  .querySelector("#checkoutForm")
  .addEventListener("submit", validateForm);
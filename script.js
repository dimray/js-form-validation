const email = document.querySelector("#email");
const country = document.querySelector("#country");
const postcode = document.querySelector("#postcode");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const button = document.querySelector("button");
const form = document.querySelector("form");
const hiFive = document.querySelector("h1");

email.addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Enter a valid email address");
  } else {
    email.setCustomValidity("");
  }
});

postcode.addEventListener("input", (event) => {
  const regex = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;
  if (!regex.test(postcode.value)) {
    postcode.setCustomValidity("Enter a valid postcode");
  } else {
    postcode.setCustomValidity("");
  }
})

password.addEventListener("input", (e) => {
  console.log(e);
  if (e.target.value.length < 5) {
    password.setCustomValidity("Password must be at least 5 digits long")
  } else {
    password.setCustomValidity("");
  }
  passwordConfirmation.dispatchEvent(new Event("input"));
})

passwordConfirmation.addEventListener("input", (e) => {

  if (passwordConfirmation.value !== password.value) {
    passwordConfirmation.setCustomValidity("Confirmation does not match password")
  } else {
    passwordConfirmation.setCustomValidity("");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.add("hidden");
  hiFive.classList.remove("hidden");

})
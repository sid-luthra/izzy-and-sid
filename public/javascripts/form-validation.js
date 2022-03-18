const form = document.querySelector('form');
console.log(form);

const firstName = document.getElementById('firstName0');
const firstNameError = document.querySelector('#firstName0 + span.error');

const lastName = document.getElementById('lastName0');
const lastNameError = document.querySelector('#lastName0 + span.error');

const email = document.getElementById('email0');
const emailError = document.querySelector('#email0 + span.error');

const streetAddress = document.getElementById('streetAddress');
const streetAddressError = document.querySelector('#streetAddress + span.error');

const city = document.getElementById('city');
const cityError = document.querySelector('#city + span.error');

const showError = () => {
  if (firstName.validity.valueMissing) {
    firstName.classList.add('isError');
    firstNameError.textContent = 'Please enter your name';
  }
  if (lastName.validity.valueMissing) {
    lastName.classList.add('isError');
    lastNameError.textContent = 'Please enter your name';
  }
  if (email.validity.valueMissing) {
    email.classList.add('isError');
    emailError.textContent = 'Please enter a valid email address';
  } else if (email.validity.typeMismatch) {
    email.classList.add('isError');
    emailError.textContnet = 'Please enter a valid email address';
  }
  if (streetAddress.validity.valueMissing) {
    streetAddress.classList.add('isError');
    streetAddressError.textContent = 'Please enter a street address';
  }
  if (city.validity.valueMissing) {
    city.classList.add('isError');
    cityError.textContent = 'Please enter a city';
  }
};

firstName.addEventListener('input', () => {
  if (firstName.validity.valid) {
    firstName.classList.remove('isError');
    firstNameError.textContent = '';
  }
});

lastName.addEventListener('input', () => {
  if (lastName.validity.valid) {
    lastName.classList.remove('isError');
    lastNameError.textContent = '';
  }
});

email.addEventListener('input', () => {
  if (email.validity.valid) {
    email.classList.remove('isError');
    emailError.textContent = '';
  }
});

streetAddress.addEventListener('input', () => {
  if (streetAddress.validity.valid) {
    streetAddress.classList.remove('isError');
    streetAddressError.textContent = '';
  }
});

city.addEventListener('input', () => {
  if (city.validity.valid) {
    city.classList.remove('isError');
    city.textContent = '';
  }
});

form.addEventListener('submit', (e) => {
  // eslint-disable-next-line max-len
  if (!firstName.validity.valid || !lastName.validity.valid || !email.validity.valid || !streetAddress.validity.valid || !city.validity.valid) {
    showError();
    e.preventDefault();
  }
});

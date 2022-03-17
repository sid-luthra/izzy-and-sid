const form = document.querySelector('form');
const familyName = document.getElementById('familyName');

const familyNameError = document.querySelector('#familyName + span.error')

const showError = () => {
  if (familyName.validity.valueMissing) {
    familyNameError.textContent = 'Please include a contact name!';
  }
};

familyName.addEventListener('blur', (e) => {
  if (!familyName.validity.valid) {
    showError();
    e.preventDefault();
  }
});

form.addEventListener('submit', (e) => {
  if (!familyName.validity.valid) {
    showError();
    e.preventDefault();
  }
});

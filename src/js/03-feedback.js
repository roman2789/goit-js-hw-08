import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let formData = {};
populateFormData();

function onFormInput({ target: { name, value } }) {
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateFormData() {
  const savedInputData = localStorage.getItem('feedback-form-state');
  const dataParse = JSON.parse(savedInputData);
  if (dataParse) {
    formData = { ...dataParse };
    emailInput.value = dataParse.email ? dataParse.email : '';
    messageInput.value = dataParse.message ? dataParse.message : '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
populateFormData();

localStorage.removeItem('videoplayer-current-time');

const formData = {};
function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateFormData() {
  const savedInputData = localStorage.getItem('feedback-form-state');
  const dataParse = JSON.parse(savedInputData);

  if (dataParse.email) {
    emailInput.value = dataParse.email;
  }
  if (dataParse.message) {
    messageInput.value = dataParse.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

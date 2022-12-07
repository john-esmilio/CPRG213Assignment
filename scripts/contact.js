// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// const submitBtn = document.getElementById('submit-button');

// function submit(e){
//   e.preventDefault();

// }

// const formElement = document.getElementsByTagName('form').item(0);
const formEl = document.querySelector('main');
formEl.onsubmit = function(e) {
  e.preventDefault();
  formEl.innerHTML = "<h2>Thank you for your message!</h2>";
};

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.


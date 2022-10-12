'use strict';

// change the color of color-change elements when button is clicked
// When someone clicks the button with the class “color-changer”, 
// all elements with the class “color-change” should turn red 
// (you can do this by adding the class “red” to them).

// Version 1
// function colorChange() {
//     const colorChangeElements = document.querySelectorAll('button.color-change');
    
//     for (const element of colorChangeElements){
//         element.classList.add("red");
//     }
// };

// const button = document.querySelector('.color-changer')
// button.addEventListener('click', colorChange);


// Version 2
const button = document.querySelector('.color-changer');
button.addEventListener('click', () => {
    const colorChangeElements = document.querySelectorAll('.color-change');
    
    for (const element of colorChangeElements){
        element.classList.add("red");
    }
});

// Version 3
// document.querySelector('.color-changer').addEventListener('click', () => {
//     const colorChangeElements = document.querySelectorAll('.color-change');
//     for (const element of colorChangeElements){
//         element.classList.add("red");
//     }});


// // Answer Guide Version
// function changeColor() {
//     const colorChangeEls = document.querySelectorAll('.color-change');
  
//     for (const el of colorChangeEls) {
//       el.classList.add('red');
//     }
//   }

// document.querySelector('.color-changer').addEventListener('click', changeColor);

 
// When someone submits the form, prevent its default behavior 
// (it should not redirect to a new page). 
// Instead, validate the input in the text input with ID “number-input”. 
// If it is not a number or greater than or equal to 10, 
// change the text of the element with ID “formFeedback” to say 
// ‘Please enter a smaller number’. 
// Otherwise, change the text of that element to say 
// “You are good to go!.”

// Version 1
// const formSubmit = document.querySelector('.number-form');
// formSubmit.addEventListener("submit", (evt) => {
//     evt.preventDefault();
    
//     const numberInput = document.querySelector('#number-input');
//     const numberInputAsNum = Number(numberInput.value);

//     if (isNaN(numberInputAsNum) || (numberInputAsNum >= 10)){
//             document.querySelector('#formFeedback').innerHTML = "Please enter a smaller number";
//         } else {
//             document.querySelector('#formFeedback').innerHTML = "You are good to go!";
//         }

//     });


// Version 2
const formSubmit = document.querySelector('.number-form');
formSubmit.addEventListener("submit", (evt) => {
    evt.preventDefault();
    
    const numberInput = Number((document.querySelector('#number-input')).value);
    const feedback = document.querySelector('#formFeedback')

    if (isNaN(numberInput) || (numberInput >= 10)){
            feedback.innerHTML = "Please enter a smaller number";
        } else {
            feedback.innerHTML = "You are good to go!";
        }

    });


// // Answer Guide Version 
// function validateNumber(evt) {
//     evt.preventDefault();
  
//     const numberInput = document.querySelector('#number-input');
//     const userNum = Number(numberInput.value); // typecast to num
  
//     const formFeedback = document.querySelector('#formFeedback');
//     if (isNaN(userNum) || userNum >= 10) {
//       formFeedback.innerText = 'Please enter a smaller number';
//     } else {
//       formFeedback.innerText = 'You are good to go!';
//     }
//   }
  
//   document.querySelector('.number-form').addEventListener('submit', validateNumber);
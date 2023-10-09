// const myButton = document.getElementById("myButton");

// myButton.addEventListener("click", function() {
//   console.log("Button was clicked!");
// });

// const hideButton = document.getElementById("hideButton");
// const elementToHide = document.getElementById("elementToHide");

// hideButton.addEventListener("click", function() {
//     console.log("Button clicked. Hiding the element.")
//   elementToHide.style.display = "none";
// });

// function changeColor(isHovering) {
//     const hoverLink = document.getElementById("hoverLink");
//     if (isHovering) {
//       hoverLink.style.color = "red"; // Change color on hover
//     } else {
//       hoverLink.style.color = "blue"; // Revert to original color
//     }
//   }

// const scrollToTopLink = document.getElementById("scrollToTopLink");

// scrollToTopLink.addEventListener("click", function(event) {
//   event.preventDefault();  // Prevent the default link behavior (scrolling to the href)

//   // Scroll to the top of the page
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"  // Smooth scrolling
//   });
// });


// const playSoundLink = document.getElementById("playSoundLink");
// const audio = document.getElementById("myAudio");

// playSoundLink.addEventListener("click", function(event) {
//   event.preventDefault();  // Prevent the default link behavior (navigating)

//   // Play the audio
//   audio.play();
// });

// const openNewWindowLink = document.getElementById("openNewWindowLink");

// openNewWindowLink.addEventListener("click", function(event) {
//   event.preventDefault();  // Prevent the default link behavior (navigating)

//   // Open a new window
//   window.open("https://www.twitter.com", "_blank", "width=500,height=500");
// });

// const alertButton = document.getElementById("alertButton");

// alertButton.addEventListener("click", function() {
//   alert("Danger!.Khabardar alert Raho Koi Hai...");
// });

// function changeColor(isHovering) {
//     const colorChangeButton = document.getElementById("colorChangeButton");
//     if (isHovering) {
//       colorChangeButton.style.backgroundColor = "red"; // Change color on hover
//     } else {
//       colorChangeButton.style.backgroundColor = "blue"; // Revert to original color
//     }
//   }
  
// function playSound() {
//     const audio = document.getElementById("myAudio");
//     audio.play();
//   }
  

// const mouseOverElement = document.getElementById("mouseOverElement");

// mouseOverElement.addEventListener("mouseover", function() {
//   alert("Hello World!");
// });


// const elementToHide = document.getElementById("elementToHide");

// elementToHide.addEventListener("mouseout", function() {
//   elementToHide.style.display = "none";
// });


// function logUserInput() {
//     const userInput = document.getElementById("userInput").value;
//     console.log("User input:", userInput);
//   }
  
// function logCheckboxValue() {
//     const checkbox = document.getElementById("myCheckbox");
//     console.log("Checkbox value:", checkbox.checked);
//   }
  
// function logSelectValue() {
//     const select = document.getElementById("mySelect");
//     const selectedValue = select.value;
//     console.log("Selected value:", selectedValue);
//   }
  
// const married = false;  // Assuming married is initially false

// if (!married) {
//   const statusField = document.getElementById("status");
//   statusField.value = "available";
// }

// const inputField = document.getElementById('myInput');

// // Check if the input is empty
// if (inputField.value.trim() === '') {
//   inputField.value = "Default Value";  // Replace with your desired default value
// }


// function validateForm() {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
    
//     const nameError = document.getElementById("nameError");
//     const emailError = document.getElementById("emailError");
//     const passwordError = document.getElementById("passwordError");

//     nameError.textContent = " ";
//     emailError.textContent = " ";
//     passwordError.textContent = " ";

//     let valid = true;

//     if (name.trim() === " ") {
//       nameError.textContent = "Name is required.";
//       valid = false;
//     }

//     if (email.trim() === " ") {
//       emailError.textContent = "Email is required.";
//       valid = false;
//     }

//     if (password.trim() === " ") {
//       passwordError.textContent = "Password is required.";
//       valid = false;
//     }

//     return valid;
//   }
  

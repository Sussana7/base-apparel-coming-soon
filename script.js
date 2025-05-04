let form = document.getElementsByName("myForm");
let emailInput = form.querySelector('input[type="email"]');
let submitButton = form.querySelector('button[type="submit"]');

// form.addEventListener("submit", function(event) {
//     event.preventDefault();  // This prevents the form from submitting and refreshing the page
    
//     let emailValue = emailInput.value;  // Gets the email input value
    
//     if (validateEmail(emailValue)) {
//       console.log("Email submitted: ", emailValue);  
//      } else {
//       alert("Please enter a valid email address.");
//     }
//   });
  
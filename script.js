//your JS code here. If required.
// Function to handle focus movement for OTP fields
document.addEventListener('DOMContentLoaded', () => {
  const otpFields = document.querySelectorAll('.code');
  
  otpFields.forEach((field, index) => {
    field.addEventListener('input', handleInput);
    field.addEventListener('keydown', handleBackspace);
  });

  function handleInput(event) {
    const currentField = event.target;
    const nextField = currentField.nextElementSibling;

    // If input is not empty, move to the next field
    if (currentField.value !== "" && nextField) {
      nextField.focus();
    }
  }

  function handleBackspace(event) {
    const currentField = event.target;
    const prevField = currentField.previousElementSibling;

    // Handle backspace key to move focus to previous field
    if (event.key === "Backspace" && currentField.value === "") {
      if (prevField) {
        prevField.focus();
      }
    }
  }
});

const form = document.getElementById("registrationForm");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const eventError = document.getElementById("eventError");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting and page reload

  // Clear previous error messages and success
  nameError.textContent = "";
  emailError.textContent = "";
  eventError.textContent = "";
  successMessage.textContent = "";

  // Capture inputs using form.elements
  const name = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();
  const selectedEvent = form.elements["event"].value;

  // Validation flags
  let isValid = true;

  // Validate Name (not empty, min 2 chars)
  if (name.length < 2) {
    nameError.textContent = "Please enter your name (at least 2 characters).";
    isValid = false;
  }

  // Validate Email (basic format check)
  if (!email.match(/^\S+@\S+\.\S+$/)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Validate Event selection
  if (!selectedEvent) {
    eventError.textContent = "Please select an event.";
    isValid = false;
  }

  // If all inputs are valid, show success message
  if (isValid) {
    successMessage.textContent = `Thank you, ${name}! You have successfully registered for the event.`;
    form.reset(); // Reset form fields
  }
});

const form = document.getElementById("registrationForm");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Form submit triggered");

  messageDiv.textContent = "";
  messageDiv.style.color = "";

  const name = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();
  const selectedEvent = form.elements["event"].value;

  console.log("Input values:", { name, email, selectedEvent });

  if (!name || !email || !selectedEvent) {
    messageDiv.textContent = "Please fill out all fields before submitting.";
    messageDiv.style.color = "red";
    console.warn("Validation failed: missing fields");
    return;
  }

  const userData = { name, email, event: selectedEvent };
  console.log("User data prepared to send:", userData);

  messageDiv.textContent = "Sending registration...";
  messageDiv.style.color = "black";

  setTimeout(() => {
    const mockAPI = "https://jsonplaceholder.typicode.com/posts";

    fetch(mockAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    })
    .then(response => {
      console.log("Fetch response received", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      console.log("Fetch succeeded with JSON data:", data);
      messageDiv.textContent = "Registration successful! Thank you.";
      messageDiv.style.color = "green";
      form.reset();
    })
    .catch(error => {
      console.error("Fetch error:", error);
      messageDiv.textContent = "Registration failed. Please try again.";
      messageDiv.style.color = "red";
    });
  }, 1500);
});

const form = document.getElementById("registrationForm");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Clear previous messages
  messageDiv.textContent = "";
  messageDiv.style.color = "";

  // Get form data
  const name = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();
  const selectedEvent = form.elements["event"].value;

  // Basic validation (optional here, or integrate with previous validation)
  if (!name || !email || !selectedEvent) {
    messageDiv.textContent = "Please fill out all fields before submitting.";
    messageDiv.style.color = "red";
    return;
  }

  // Prepare data to send
  const userData = {
    name: name,
    email: email,
    event: selectedEvent
  };

  // Simulate network delay with setTimeout
  messageDiv.textContent = "Sending registration...";
  messageDiv.style.color = "black";

  setTimeout(() => {
    // Fake API endpoint (you can replace this with an actual endpoint)
    const mockAPI = "https://jsonplaceholder.typicode.com/posts";

    fetch(mockAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      messageDiv.textContent = "Registration successful! Thank you.";
      messageDiv.style.color = "green";
      form.reset();
    })
    .catch(error => {
      messageDiv.textContent = "Registration failed. Please try again.";
      messageDiv.style.color = "red";
      console.error("Fetch error:", error);
    });
  }, 1500); // 1.5 second delay to simulate latency
});


/*

HTML (can extend the previous form, e.g. index.html)
<!-- Assuming the same form as before -->

<div id="message"></div>

<script src="exercise12.js"></script>
*/
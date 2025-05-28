// Exercise 7: DOM Manipulation

// Sample events array
const events = [
  { id: 1, name: "Community Cleanup", category: "Environment", seats: 5 },
  { id: 2, name: "Music Festival", category: "Music", seats: 0 },
  { id: 3, name: "Art Workshop", category: "Art", seats: 10 }
];

// Select container element where event cards will be shown
const eventsContainer = document.querySelector("#eventsContainer");

// Function to render events
function renderEvents() {
  // Clear existing content
  eventsContainer.innerHTML = "";

  // Loop through events and create cards
  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    const title = document.createElement("h3");
    title.textContent = event.name;
    card.appendChild(title);

    const category = document.createElement("p");
    category.textContent = `Category: ${event.category}`;
    card.appendChild(category);

    const seats = document.createElement("p");
    seats.textContent = `Seats Available: ${event.seats}`;
    card.appendChild(seats);

    // Create Register button, disable if no seats
    const registerBtn = document.createElement("button");
    registerBtn.textContent = event.seats > 0 ? "Register" : "Full";
    registerBtn.disabled = event.seats <= 0;

    // Register button click event
    registerBtn.onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        alert(`Registered for ${event.name}. Seats left: ${event.seats}`);
        renderEvents(); // Update UI after registration
      }
    };

    card.appendChild(registerBtn);

    eventsContainer.appendChild(card);
  });
}

// Initial render on page load
renderEvents();



/*
html

<div id="eventsContainer"></div>

<script src="exercise7.js"></script>

*/

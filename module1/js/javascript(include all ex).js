// ====================
// Exercise 1: JavaScript Basics & Setup
// ====================
console.log("Welcome to the Community Portal");

window.addEventListener('load', () => {
  alert("Page is fully loaded");
});

// ====================
// Exercise 2: Syntax, Data Types, and Operators
// ====================
const eventName = "Community Clean-up";
const eventDate = "2025-06-10";
let seatsAvailable = 50;

console.log(`Event: ${eventName} on ${eventDate} with ${seatsAvailable} seats available.`);

// ====================
// Exercise 3: Conditionals, Loops, and Error Handling
// ====================

const eventList = [
  { name: "Community Clean-up", date: "2025-06-10", seats: 10 },
  { name: "Music Festival", date: "2024-05-01", seats: 0 },  // past date or full seats
  { name: "Workshop on Baking", date: "2025-07-15", seats: 5 }
];

// Only display upcoming events with seats
function showValidEvents(events) {
  const today = new Date();
  events.forEach(event => {
    const eventDate = new Date(event.date);
    if (eventDate > today && event.seats > 0) {
      console.log(`Upcoming: ${event.name} on ${event.date}, Seats left: ${event.seats}`);
    } else {
      console.log(`Skipping past/full event: ${event.name}`);
    }
  });
}
showValidEvents(eventList);

// Try-catch for registration logic
function registerForEvent(eventName) {
  try {
    const event = eventList.find(e => e.name === eventName);
    if (!event) throw new Error("Event not found");
    if (event.seats <= 0) throw new Error("No seats available");
    event.seats--;
    console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);
  } catch (err) {
    console.error("Registration failed:", err.message);
  }
}

// ====================
// Exercise 4: Functions, Scope, Closures, Higher-Order Functions
// ====================
function addEvent(events, newEvent) {
  events.push(newEvent);
  console.log(`Added event: ${newEvent.name}`);
}

function registerUser(eventName) {
  // Use closure to keep track of total registrations per category
  let totalRegistrations = 0;

  return function() {
    totalRegistrations++;
    console.log(`User registered for ${eventName}. Total registrations: ${totalRegistrations}`);
  };
}

function filterEventsByCategory(events, category, callback) {
  const filtered = events.filter(event => event.category === category);
  callback(filtered);
}

const registerForCleanup = registerUser("Community Clean-up");

registerForCleanup(); // closure example

// ====================
// Exercise 5: Objects and Prototypes
// ====================
function Event(name, date, seats, category) {
  this.name = name;
  this.date = date;
  this.seats = seats;
  this.category = category;
}

Event.prototype.checkAvailability = function() {
  return this.seats > 0 ? "Seats available" : "Full";
};

const event1 = new Event("Yoga Workshop", "2025-08-10", 20, "Health");
console.log(event1.checkAvailability());

console.log(Object.entries(event1)); // keys and values

// ====================
// Exercise 6: Arrays and Methods
// ====================
const eventsArray = [
  new Event("Music Festival", "2025-09-01", 30, "Music"),
  new Event("Art Exhibition", "2025-07-20", 15, "Art")
];

// Add new event
eventsArray.push(new Event("Cooking Class", "2025-10-05", 10, "Cooking"));

// Filter music events
const musicEvents = eventsArray.filter(e => e.category === "Music");

// Map to display cards (simple strings here)
const displayCards = eventsArray.map(e => `Event: ${e.name} (${e.category})`);
console.log(displayCards);

// ====================
// Exercise 7: DOM Manipulation
// ====================
function renderEvents(events) {
  const container = document.querySelector("#eventsContainer");
  container.innerHTML = ''; // clear previous

  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "eventCard";

    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Date: ${event.date}</p>
      <p>Seats left: ${event.seats}</p>
      <button onclick="handleRegister('${event.name}')">Register</button>
    `;
    container.appendChild(card);
  });
}

function handleRegister(eventName) {
  registerForEvent(eventName);
  renderEvents(eventList); // Update UI
}

// Render events on page load
window.addEventListener("load", () => renderEvents(eventList));

// ====================
// Exercise 8: Event Handling
// ====================
document.querySelector("#categoryFilter").addEventListener("change", e => {
  const selected = e.target.value;
  const filtered = selected === "all" ? eventList : eventList.filter(ev => ev.category === selected);
  renderEvents(filtered);
});

document.querySelector("#searchInput").addEventListener("keydown", e => {
  const query = e.target.value.toLowerCase();
  const filtered = eventList.filter(ev => ev.name.toLowerCase().includes(query));
  renderEvents(filtered);
});

// ====================
// Exercise 9: Async JS, Promises, Async/Await
// ====================

async function fetchEvents() {
  const loading = document.querySelector("#loading");
  loading.style.display = "block";
  try {
    // Mock API URL (replace with real API if available)
    const response = await fetch("https://mockapi.io/events"); // Note: this is an example and won't work without a real endpoint
    const data = await response.json();
    renderEvents(data);
  } catch (error) {
    console.error("Fetch failed:", error);
  } finally {
    loading.style.display = "none";
  }
}

// To simulate, you can call fetchEvents() here or on button click.

// ====================
// Exercise 10: Modern JavaScript Features
// ====================
const cloneEvents = [...eventList]; // Spread operator clone

const printEvent = ({ name, date }) => {
  console.log(`Event: ${name} on ${date}`);
};

cloneEvents.forEach(printEvent);

// ====================
// Exercise 11: Working with Forms
// ====================
document.querySelector("#registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();
  const eventSelected = form.elements["eventSelect"].value;

  if (!name || !email || eventSelected === "none") {
    alert("Please fill in all fields");
    return;
  }

  console.log(`Registering ${name} (${email}) for event: ${eventSelected}`);
  form.reset();
});

// ====================
// Exercise 12: AJAX & Fetch API
// ====================
function submitRegistration(data) {
  console.log("Sending registration...");
  // Simulate delayed response with setTimeout
  setTimeout(() => {
    fetch("https://mockapi.io/register", { // This is mock and won't actually send data
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(res => {
      if (!res.ok) throw new Error("Network response was not ok");
      alert("Registration successful!");
    })
    .catch(err => alert("Registration failed: " + err.message));
  }, 2000);
}

// ====================
// Exercise 13: Debugging and Testing
// ====================
// Use Chrome DevTools Console and Network tab to debug and test form submissions and fetch requests.

// ====================
// Exercise 14: jQuery and JS Frameworks
// ====================
// Assuming jQuery is loaded in HTML

// $('#registerBtn').click(() => {
//   $('#eventsContainer').fadeOut(500).fadeIn(500);
// });

// Benefit of frameworks like React or Vue:  
// They enable efficient UI updates via component-based architecture, improving maintainability and performance.

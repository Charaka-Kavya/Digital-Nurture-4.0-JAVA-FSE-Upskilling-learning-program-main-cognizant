// Exercise 3: Conditionals, Loops, and Error Handling

// List of events with name, date, and seats
const events = [
  { name: "Community Cleanup", date: "2025-06-15", seats: 5 },
  { name: "Music Festival", date: "2023-11-10", seats: 0 }, // past or full event
  { name: "Food Drive", date: "2025-07-01", seats: 10 },
  { name: "Art Workshop", date: "2024-12-01", seats: 0 }, // full event
];

// Get today's date for comparison
const today = new Date();

// Function to check if an event is upcoming and has available seats
function isValidEvent(event) {
  const eventDate = new Date(event.date);
  return eventDate >= today && event.seats > 0;
}

// Display valid events
console.log("Upcoming events with seats available:");

events.forEach(event => {
  if (isValidEvent(event)) {
    console.log(`- ${event.name} on ${event.date}, Seats: ${event.seats}`);
  }
});

// Registration function with error handling
function register(eventName) {
  try {
    // Find event by name
    const event = events.find(e => e.name === eventName);
    if (!event) throw new Error("Event not found");

    // Check event validity
    if (!isValidEvent(event)) throw new Error("Event is either past or full");

    // Register user by reducing seats
    event.seats--;
    console.log(`Successfully registered for ${event.name}. Seats left: ${event.seats}`);

  } catch (error) {
    console.error(`Registration failed: ${error.message}`);
  }
}

// Test registrations
register("Community Cleanup"); // success
register("Music Festival");    // fails (past or full)
register("Non Existing Event"); // fails (not found)
register("Art Workshop");       // fails (full)

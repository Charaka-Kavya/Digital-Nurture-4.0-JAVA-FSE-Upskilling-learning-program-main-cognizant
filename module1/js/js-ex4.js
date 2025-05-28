// Exercise 4: Functions, Scope, Closures, Higher-Order Functions

// Event list with categories and registration counts
const events = [
  { name: "Community Cleanup", category: "Environment", seats: 5 },
  { name: "Music Festival", category: "Music", seats: 10 },
  { name: "Food Drive", category: "Charity", seats: 8 },
  { name: "Art Workshop", category: "Art", seats: 7 },
];

// 1. addEvent: adds a new event to the events array
function addEvent(name, category, seats) {
  events.push({ name, category, seats });
  console.log(`Event "${name}" added under category "${category}" with ${seats} seats.`);
}

// 2. registerUser: registers a user for an event, decreases seats
function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (!event) {
    console.log(`Event "${eventName}" not found.`);
    return;
  }
  if (event.seats > 0) {
    event.seats--;
    console.log(`User registered for "${event.name}". Seats left: ${event.seats}`);
  } else {
    console.log(`Sorry, "${event.name}" is fully booked.`);
  }
}

// 3. filterEventsByCategory: higher-order function that takes a callback to filter events dynamically
function filterEventsByCategory(callback) {
  return events.filter(callback);
}

// 4. Closure to track total registrations for each category
function registrationTracker() {
  const categoryRegistrations = {};

  return function(category) {
    if (!categoryRegistrations[category]) {
      categoryRegistrations[category] = 0;
    }
    categoryRegistrations[category]++;
    console.log(`Total registrations for ${category}: ${categoryRegistrations[category]}`);
  }
}

const trackCategoryRegistrations = registrationTracker();

// Usage examples:

// Adding a new event
addEvent("Book Fair", "Education", 12);

// Register users for some events and track registrations
registerUser("Music Festival");
trackCategoryRegistrations("Music");

registerUser("Community Cleanup");
trackCategoryRegistrations("Environment");

registerUser("Community Cleanup");
trackCategoryRegistrations("Environment");

// Filtering events in category "Art"
const artEvents = filterEventsByCategory(event => event.category === "Art");
console.log("Art Events:", artEvents);

// Filtering events with seats > 5
const availableEvents = filterEventsByCategory(event => event.seats > 5);
console.log("Events with seats > 5:", availableEvents);

// Exercise 2: Syntax, Data Types, and Operators

// Use const for event name and date
const eventName = "Community Cleanup";
const eventDate = "2025-06-15";

// Use let for available seats
let availableSeats = 10;

// Concatenate event info using template literals
console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Seats available: ${availableSeats}`);

// Simulate a user registration reducing seat count
function registerSeat() {
  if (availableSeats > 0) {
    availableSeats--; // decrement seat count
    console.log(`Registration successful. Seats left: ${availableSeats}`);
  } else {
    console.log("Sorry, no seats available.");
  }
}

// Test seat registration
registerSeat(); // Should reduce seats from 10 to 9
registerSeat(); // Should reduce seats from 9 to 8

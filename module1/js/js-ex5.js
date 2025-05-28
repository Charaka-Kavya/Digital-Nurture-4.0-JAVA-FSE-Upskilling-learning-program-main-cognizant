// Exercise 5: Objects and Prototypes

// 1. Event constructor function
function Event(name, category, seats) {
  this.name = name;
  this.category = category;
  this.seats = seats;
}

// 2. Add method checkAvailability() to prototype
Event.prototype.checkAvailability = function() {
  if (this.seats > 0) {
    return `${this.name} has ${this.seats} seats available.`;
  } else {
    return `${this.name} is fully booked.`;
  }
};

// 3. Create some event objects
const event1 = new Event("Community Cleanup", "Environment", 5);
const event2 = new Event("Music Festival", "Music", 0);
const event3 = new Event("Art Workshop", "Art", 10);

// 4. Use checkAvailability method
console.log(event1.checkAvailability()); // Community Cleanup has 5 seats available.
console.log(event2.checkAvailability()); // Music Festival is fully booked.

// 5. List object keys and values using Object.entries()
console.log("Event1 properties and values:");
Object.entries(event1).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

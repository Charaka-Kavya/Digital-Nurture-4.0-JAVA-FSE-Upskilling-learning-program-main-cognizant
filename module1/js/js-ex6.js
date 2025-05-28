// Exercise 6: Arrays and Methods

// Existing array of event objects
const events = [
  { name: "Community Cleanup", category: "Environment", seats: 5 },
  { name: "Music Festival", category: "Music", seats: 0 },
  { name: "Art Workshop", category: "Art", seats: 10 }
];

// 1. Add a new event using .push()
events.push({ name: "Baking Workshop", category: "Cooking", seats: 15 });
console.log("Events after adding new:", events);

// 2. Use .filter() to show only music events
const musicEvents = events.filter(event => event.category === "Music");
console.log("Music Events:", musicEvents);

// 3. Use .map() to create formatted display cards
const displayCards = events.map(event => {
  return `<div class="event-card">
    <h3>${event.name}</h3>
    <p>Category: ${event.category}</p>
    <p>Seats Available: ${event.seats}</p>
  </div>`;
});
console.log("Event Display Cards:");
displayCards.forEach(card => console.log(card));

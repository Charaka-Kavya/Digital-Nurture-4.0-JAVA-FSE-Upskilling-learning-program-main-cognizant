// Sample event list
const events = [
  { id: 1, name: "Music Festival", category: "Music", date: "2025-06-10", seats: 50 },
  { id: 2, name: "Art Workshop", category: "Art", date: "2025-06-15", seats: 30 },
  { id: 3, name: "Cooking Class", category: "Food", date: "2025-07-01", seats: 20 },
];

// 1. Function with default parameters and let/const
const filterEventsByCategory = (eventList = [], category = "Music") => {
  // Clone event list with spread operator to avoid mutation
  const clonedEvents = [...eventList];

  // Filter events using destructuring
  return clonedEvents.filter(({ category: cat }) => cat === category);
};

// 2. Function using destructuring and template literals
const formatEventDisplay = ({ name, date, seats }) => 
  `Event: ${name} | Date: ${date} | Seats Available: ${seats}`;

// Usage example:
const musicEvents = filterEventsByCategory(events); // defaults to 'Music'

console.log("Filtered Events:");
musicEvents.forEach(event => console.log(formatEventDisplay(event)));

// Adding a new event immutably using spread operator
const newEvent = { id: 4, name: "Dance Show", category: "Music", date: "2025-07-10", seats: 100 };
const updatedEvents = [...events, newEvent];

console.log("\nUpdated Event List:");
updatedEvents.forEach(({ name, category, date }) => {
  console.log(`- ${name} (${category}) on ${date}`);
});

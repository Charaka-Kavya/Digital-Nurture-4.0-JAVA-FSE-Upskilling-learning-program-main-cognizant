// Sample events array (can be reused or imported)
const events = [
  { id: 1, name: "Community Cleanup", category: "Environment", seats: 5 },
  { id: 2, name: "Music Festival", category: "Music", seats: 0 },
  { id: 3, name: "Art Workshop", category: "Art", seats: 10 },
  { id: 4, name: "Jazz Night", category: "Music", seats: 8 }
];

// Select DOM elements
const eventsContainer = document.querySelector("#eventsContainer");
const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");

// Function to render events, optionally filtered by category and search
function renderEvents(filteredEvents) {
  eventsContainer.innerHTML = "";

  if (filteredEvents.length === 0) {
    eventsContainer.textContent = "No events found.";
    return;
  }

  filteredEvents.forEach(event => {
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

    const registerBtn = document.createElement("button");
    registerBtn.textContent = event.seats > 0 ? "Register" : "Full";
    registerBtn.disabled = event.seats <= 0;

    registerBtn.onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        alert(`Registered for ${event.name}. Seats left: ${event.seats}`);
        applyFilters();
      }
    };

    card.appendChild(registerBtn);
    eventsContainer.appendChild(card);
  });
}

// Function to apply category filter and search input filter
function applyFilters() {
  const category = categoryFilter.value;
  const searchTerm = searchInput.value.toLowerCase();

  let filtered = events;

  if (category !== "all") {
    filtered = filtered.filter(e => e.category.toLowerCase() === category.toLowerCase());
  }

  if (searchTerm) {
    filtered = filtered.filter(e => e.name.toLowerCase().includes(searchTerm));
  }

  renderEvents(filtered);
}

// Event listener for category filter dropdown
categoryFilter.onchange = () => {
  applyFilters();
};

// Event listener for search input keydown (debounced for performance)
let typingTimer;
searchInput.onkeydown = () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(() => {
    applyFilters();
  }, 300);
};

// Initial render with all events
renderEvents(events);



/*

HTML snippet to use with this JS:

<label for="categoryFilter">Filter by category:</label>
<select id="categoryFilter">
  <option value="all">All</option>
  <option value="Environment">Environment</option>
  <option value="Music">Music</option>
  <option value="Art">Art</option>
</select>

<label for="searchInput">Search events:</label>
<input type="text" id="searchInput" placeholder="Search by event name...">

<div id="eventsContainer"></div>

<script src="exercise8.js"></script>

*/

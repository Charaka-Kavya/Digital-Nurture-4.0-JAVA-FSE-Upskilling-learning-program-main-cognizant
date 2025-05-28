const eventsContainer = document.getElementById("eventsContainer");
const loadingSpinner = document.getElementById("loadingSpinner");

// Mock API endpoint (you can replace this with a real endpoint)
const mockApiUrl = "https://jsonplaceholder.typicode.com/posts"; // Using posts as dummy data

// Function to render events (simplified for demo)
function renderEvents(events) {
  eventsContainer.innerHTML = "";

  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.textContent = event.title || event.name || "No event name";
    eventsContainer.appendChild(card);
  });
}

// 1. Fetch with then() and catch()
function fetchEventsWithThen() {
  loadingSpinner.style.display = "block";
  fetch(mockApiUrl)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      loadingSpinner.style.display = "none";
      // Use only first 10 for demo
      renderEvents(data.slice(0, 10));
    })
    .catch(error => {
      loadingSpinner.style.display = "none";
      eventsContainer.textContent = `Error loading events: ${error.message}`;
    });
}

// 2. Async/Await version
async function fetchEventsAsync() {
  loadingSpinner.style.display = "block";
  try {
    const response = await fetch(mockApiUrl);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    loadingSpinner.style.display = "none";
    renderEvents(data.slice(0, 10));
  } catch (error) {
    loadingSpinner.style.display = "none";
    eventsContainer.textContent = `Error loading events: ${error.message}`;
  }
}

// Choose which to run here:
// fetchEventsWithThen();
fetchEventsAsync();





/*
HTML snippet (add this inside your page):

<div id="loadingSpinner" style="display:none;">Loading events...</div>
<div id="eventsContainer"></div>

<script src="exercise9.js"></script>
*/

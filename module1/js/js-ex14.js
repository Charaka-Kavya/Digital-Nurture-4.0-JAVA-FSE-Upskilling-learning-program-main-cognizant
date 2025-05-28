<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>jQuery Example - Event Portal</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <style>
    .eventCard {
      display: none;
      padding: 10px;
      margin: 10px 0;
      background-color: #f0f0f0;
      border-radius: 4px;
    }
  </style>
</head>
<body>

  <button id="registerBtn">Register</button>

  <div class="eventCard" id="event1">Event 1: Community Cleanup</div>
  <div class="eventCard" id="event2">Event 2: Charity Marathon</div>

  <script>
    $(document).ready(function() {
      // Click handler for Register button
      $('#registerBtn').click(function() {
        // Toggle event cards with fade effect
        $('.eventCard').fadeToggle(500);
      });
    });
  </script>

</body>
</html>

-- Exercise 1: User Upcoming Events
-- Show a list of all upcoming events a user is registered for in their city, sorted by date.

SELECT e.event_id, e.title, e.city, e.start_date, e.end_date, e.status
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
JOIN Users u ON r.user_id = u.user_id
WHERE e.status = 'upcoming'
  AND e.city = u.city
  AND u.user_id = ?  -- Replace ? with the target user_id
ORDER BY e.start_date;

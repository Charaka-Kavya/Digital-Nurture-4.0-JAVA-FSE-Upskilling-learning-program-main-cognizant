-- Exercise 11: Daily New User Count
-- Find the number of users who registered each day in the last 7 days.

SELECT registration_date, COUNT(*) AS new_users_count
FROM Users
WHERE registration_date >= CURDATE() - INTERVAL 7 DAY
GROUP BY registration_date
ORDER BY registration_date;

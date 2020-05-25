SELECT name, email, phone
FROM students
WHERE github is NULL
AND NOT end_date is NULL
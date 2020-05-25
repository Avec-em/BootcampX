SELECT name, id, email, cohort_id
FROM students
WHERE phone is NULL
AND email NOT LIKE '%gmail%';
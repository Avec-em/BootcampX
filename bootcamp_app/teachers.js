

const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'vagrant'
},
console.log('connected'));


pool.query(`
SELECT teachers.name AS name, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = '${process.argv[2]}'
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name
;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.name}`);
  })
}).catch(err => console.error('query error', err.stack));

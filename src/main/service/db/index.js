const mysql = require('mysql');
const pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'fizzr',
	password: 'B^D5M%WXnqcN#p74',
	database: 'fizzr',
});

// Execute a query
pool.query('SELECT * FROM test_table', (error, results, fields) => {
	if (error) {
		console.error('Error executing query:', error);
		return;
	}

	console.log('Query results:', results);

	pool.end((err) => {
		if (err) {
			console.error('Error ending the pool:', err);
		} else {
			console.log('Pool has ended');
		}
	});
});

// Close the connection pool

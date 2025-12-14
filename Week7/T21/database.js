const mysql = require('mysql2');

const myConnectionString = "mysql://netuser:netpass@localhost:3306/opintoDB";
const connection = mysql.createPool(myConnectionString);

module.exports = connection

// Test the database connection
// Uncomment the following code to verify the connection
/*
connection.query('SHOW TABLES', function(err, result, fields){
    if (err) {
      console.error('Database connection error:', err);
    } else {
      console.log('Database connection successful', result);
    }
});
*/
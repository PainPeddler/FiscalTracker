var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "fiscal_db"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT transactions, user_id,amount FROM Transactions", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
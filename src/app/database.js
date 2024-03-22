var mysql = require("mysql");

const executeQuery = (query, callback, con) => con.query(query, callback);

const getUsers = (callback) => {
  var con = mysql.createConnection({
    host: "database-multipagos.cvokw8c08gec.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "Multipagos1234!",
    database: "multipago",
  });
  con.connect(function (err) {
    if (err) throw err;
    console.log("Conectado con MYSQL...");
  });

  executeQuery(
    "SELECT * from `contacts`",
    (err, rows) => {
      if (err) throw err;
      callback(rows);
    },
    con
  );
  con.end();
};
const pushUsers = (callback1) => {
  var conn = mysql.createConnection({
    host: "database-multipagos.cvokw8c08gec.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "Multipagos1234!",
    database: "multipago",
  });
  conn.connect(function (err) {
    if (err) throw err;
  });
  callback1(conn);
};

module.exports = {
  executeQuery,
  getUsers,
  pushUsers,
};

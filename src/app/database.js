var mysql = require("mysql");

const executeQuery = (query, callback, con) => con.query(query, callback);

const getUsers = (callback) => {
  var con = mysql.createConnection({
    host: "database-celina.cf0wny27l077.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Celina1234!",
    database: "celina",
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
    host: "database-celina.cf0wny27l077.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Celina1234!",
    database: "celina",
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

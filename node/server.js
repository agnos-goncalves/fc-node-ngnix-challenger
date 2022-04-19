const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");

app.get("/", async (req, res) => {
  const connection = mysql.createConnection(config);
  const sql = `INSERT INTO people(name) values('Batatinha')`;
  connection.query(sql);
  connection.query("SELECT * FROM people", (err, response) => {
    res.send(
      `<h1>Full Cycle Rocks!!!</h1>
       <br>
       <span>
        ${response.map((user) => `${user.name}`)}
       </span>
      `
    );
  });

  connection.end();
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});

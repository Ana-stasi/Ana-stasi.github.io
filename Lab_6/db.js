const sqlite3 = require('sqlite3').verbose();

const DB_PATH = 'app.db'

const DB = new sqlite3.Database(DB_PATH);

DB.serialize(() => {
    DB.run("CREATE TABLE IF NOT EXISTS userLoginDb (id INT PRIMARY KEY UNIQUE, user TEXT, password TEXT)");
    //DB.run(`INSERT INTO userLoginDb(user,password) VALUES ('vova', '01031975')`);
})

module.exports = DB;
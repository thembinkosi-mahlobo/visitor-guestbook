import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        message INTEGER NOT NULL
        
    )
`);

db.prepare(`INSERT INTO messages (name, message) VALUES (?, ?)`).run(
  "PhatJoe",
  "Argubly the best lyrist"
);

const insertStatement = db.prepare(
  `INSERT INTO messages (name, message) VALUES (?, ?)`
);

insertStatement.run("PhatJoe", "Argubly the best lyrist");
insertStatement.run("BigPun", "That's an opinion");
insertStatement.run("hip-hop", "disagrees");

insertStatement.run("PhatJoe", "That's an opinion");

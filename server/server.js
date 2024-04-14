import Database from "better-sqlite3";
import express, { request, response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const db = new Database("database.db");

app.get("/", function (request, response) {
  response.json("For this is root route");
});

app.get("/guestbook", function (request, response) {
  const guestbook = db.prepare("SELECT* FROM guestbook").all();
  response.json(guestbook);
  console.log("message sent");
});

app.listen(8080, function () {
  console.log("Server is running on port 8080");
});

let guestbookEntries = [];

app.get("./entries", (request, response) => {
  response.json(guestbookEntries);
});

app.post("/entries", (request, response) => {
  const { name, message } = request.body;
  const newEntry = { name, message, timestamp: newDate() };
  guestbookEntries.push(newEntry);
  response.status(201).json({ message: "Entry add successfully" });
});

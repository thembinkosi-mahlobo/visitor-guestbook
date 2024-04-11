import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8080, function () {
  console.log("aaaaaaaaaaaaaaa... 8080");
});

const form = document.getElementById("form");
const guestbookWrapper = document.getElementById("guestbookWrapper");

async function getMessages() {
  const response = await fetch("");
  const message = await response.json();
  console.log(message);
}

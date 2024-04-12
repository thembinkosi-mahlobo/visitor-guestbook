const guestbookForm = document.getElementById("guestbookForm");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const entriesList = document.getElementById("entries");

guestbookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !message) {
    alert("Please fill out both name and message fields.");
    return;
  }

  const entry = document.createElement("li");
  entry.innerHTML = `<strong>${name}:</strong> ${message}`;
  entriesList.appendChild(entry);

  nameInput.value = "";
  messageInput.value = "";
});

const form = document.getElementById("form");
const guestbookWrapper = document.getElementById("guestbookWrapper");

async function getMessages() {
  const response = await fetch("//http://localhost:8080/message");
  const message = await response.json();
  console.log(message);
}

const emoji = document.querySelector("#emoji");
emoji.innerText = String.fromCodePoint(0x1f64f);

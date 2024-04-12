const guestbookForm = document.getElementById("guestbookForm");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const entriesList = document.getElementById("entries");

const form = document.getElementById("form");
const guestbookWrapper = document.getElementById("guestbookWrapper");

async function getMessages() {
  const response = await fetch("//http://localhost:8080/message");
  const message = await response.json();
  console.log(message);
}

message.forEach(function (newMassage) {
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  h2.textContent = newMassage.name;
  p.textContent = newMassage.message;

  guestbookWrapper.appendChild(h2);
  guestbookWrapper.appendChild(p);
});

getMessages();
function handleSunmit(event) {
  event.preventDefault();
  const data = new FormData(form);
  const formValues = Oject.forEntries(data);
  console.log(formValues);
}

form.addEventListener("submit", handleSubmit);

const emoji = document.querySelector("#emoji");
emoji.innerText = String.fromCodePoint(0x1f64f);

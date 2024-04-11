document.addEventListener("DOMContentLoaded", function () {
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
});

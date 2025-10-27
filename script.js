function sendMessage() {
  const input = document.getElementById("message-input");
  const message = input.value.trim();
  if (message === "") return;

  // Add user message
  addMessage("user", message);
  input.value = "";

  // Simulate bot response (optional)
  setTimeout(() => {
    addMessage("bot", "You said: " + message);
  }, 600);
}

function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");

  const messageEl = document.createElement("div");
  messageEl.classList.add("message", sender);
  messageEl.textContent = text;

  chatBox.appendChild(messageEl);
  chatBox.scrollTop = chatBox.scrollHeight;
}
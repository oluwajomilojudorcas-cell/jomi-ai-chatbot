const input = document.querySelector("#userInput");
const button = document.querySelector("#sendButton");
const chat = document.querySelector("#chat");

button.addEventListener("click", sendMessage);

function sendMessage() {
    const message = input.value.trim();

    if (message === "") {
        return;
    }

    const userMessage = document.createElement("p");
    userMessage.textContent = "You: " + message;
    chat.appendChild(userMessage);

    const botMessage = document.createElement("p");
    botMessage.textContent = "JOMI: Hey! 👋 I received your message.";
    chat.appendChild(botMessage);

    input.value = "";
}

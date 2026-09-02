const input = document.querySelector("#userInput");
const button = document.querySelector("#sendButton");
const chat = document.querySelector("#chat");

button.addEventListener("click", sendMessage);

function sendMessage() {
    const message = input.value.trim();

    if (message === "") {
        return;
    }

    // Show what the user typed
    const userMessage = document.createElement("p");
    userMessage.textContent = "You: " + message;
    chat.appendChild(userMessage);

    // Get JOMI's answer
    const response = getResponse(message);

    // Show JOMI's answer
    const botMessage = document.createElement("p");
    botMessage.textContent = "JOMI: " + response;
    chat.appendChild(botMessage);

    input.value = "";
}

function getResponse(message) {
    const text = message.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
        return "Heyyy! 👋 How can I help you?";
    }

    if (text.includes("how are you")) {
        return "I'm doing great! 🤖 Thanks for asking.";
    }

    if (text.includes("your name")) {
        return "I'm JOMI AI! 🤖";
    }

    if (text.includes("who created you")) {
        return "I was created by Jomi! 🚀";
    }

    if (text.includes("thank")) {
        return "You're welcome! 😊";
    }

    if (text.includes("bye")) {
        return "Bye! 👋 Come back soon.";
    }

    return "Hmm 🤔 I'm still learning. Try asking me something else!";
}

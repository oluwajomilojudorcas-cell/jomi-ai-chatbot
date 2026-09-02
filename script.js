const input = document.querySelector("#userInput");
const button = document.querySelector("#sendButton");
const chat = document.querySelector("#chat");

button.addEventListener("click", sendMessage);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

async function sendMessage() {

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    // Show your message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerHTML =
        "<strong>You:</strong> " + message;

    chat.appendChild(userMessage);

    // Clear input
    input.value = "";

    // Show thinking message
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.innerHTML =
        "<strong>JOMI:</strong> Thinking... 🤔";

    chat.appendChild(botMessage);

    chat.scrollTop = chat.scrollHeight;

    try {

        // Send question to JOMI's server
        const response = await fetch(
            "https://jomi-ai-chatbot-1.onrender.com/chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: message
                })
            }
        );

        const data = await response.json();

        // Show JOMI's answer
        botMessage.innerHTML =
            "<strong>JOMI:</strong> " + data.reply;

    } catch (error) {

        console.error(error);

        botMessage.innerHTML =
            "<strong>JOMI:</strong> Sorry 😭 I couldn't connect to my AI brain.";

    }

    chat.scrollTop = chat.scrollHeight;
}

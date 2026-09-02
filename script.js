const input = document.querySelector("#userInput");
const button = document.querySelector("#sendButton");
const chat = document.querySelector("#chat");

button.addEventListener("click", sendMessage);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    // Show your message
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerHTML = "<strong>You:</strong> " + message;

    chat.appendChild(userMessage);

    // Get JOMI's answer
    const response = getResponse(message);

    // Show JOMI's answer
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.innerHTML = "<strong>JOMI:</strong> " + response;

    chat.appendChild(botMessage);

    // Clear the input box
    input.value = "";

    // Scroll down to the newest message
    chat.scrollTop = chat.scrollHeight;
}


function getResponse(message) {

    const text = message.toLowerCase();


    // Greetings
    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {
        return "Heyyy! 👋 How are you doing?";
    }


    // How are you
    if (text.includes("how are you")) {
        return "I'm doing great! 🤖 Thanks for asking!";
    }


    // Name
    if (
        text.includes("your name") ||
        text.includes("who are you")
    ) {
        return "I'm JOMI AI! 🤖 Your little AI assistant.";
    }


    // Creator
    if (text.includes("who created you")) {
        return "I was created by Jomi! 🚀";
    }


    // Thanks
    if (
        text.includes("thank you") ||
        text.includes("thanks")
    ) {
        return "You're welcome! 😊";
    }


    // What can you do?
    if (text.includes("what can you do")) {
        return "I can chat with you, answer simple questions and tell jokes! 😎";
    }


    // Joke
    if (text.includes("joke")) {
        return "Why did the computer go to the doctor? Because it had a virus! 😂💻";
    }


    // HTML
    if (text.includes("what is html")) {
        return "HTML creates the structure of a website. 🧱";
    }


    // CSS
    if (text.includes("what is css")) {
        return "CSS makes websites look beautiful. 🎨";
    }


    // JavaScript
    if (text.includes("what is javascript")) {
        return "JavaScript makes websites interactive and gives them behaviour. 🧠";
    }


    // School
    if (text.includes("school")) {
        return "School can be stressful sometimes 😭 but you've got this! 📚";
    }


    // Food
    if (
        text.includes("food") ||
        text.includes("hungry")
    ) {
        return "Now you're speaking my language 😂🍕";
    }


    // Bye
    if (text.includes("bye")) {
        return "Bye! 👋 Come back soon!";
    }


    // Random answers
    const randomResponses = [
        "Hmm 🤔 I'm still learning!",
        "That's interesting! Tell me more 👀",
        "Good question! 🤖",
        "You got me there 😂",
        "I'm not sure yet, but I'll get smarter!",
        "Interesting... 🤔 Let me think about that!",
        "I don't know that one yet 😭"
    ];

    const randomIndex =
        Math.floor(Math.random() * randomResponses.length);

    return randomResponses[randomIndex];
}

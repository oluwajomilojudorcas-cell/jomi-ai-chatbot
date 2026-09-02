const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("."));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/chat", (req, res) => {

    const message = req.body.message;

    if (!message) {
        return res.json({
            reply: "Please type something first! 😊"
        });
    }

    const reply =
        "JOMI received your question: " + message;

    res.json({
        reply: reply
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("JOMI AI server is running!");
});

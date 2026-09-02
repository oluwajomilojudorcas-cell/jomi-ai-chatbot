const express = require("express");
const OpenAI = require("openai");

const app = express();

app.use(express.json());
app.use(express.static("."));

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/chat", async (req, res) => {
    try {
        const message = req.body.message;

        if (!message) {
            return res.json({
                reply: "Please type something first! 😊"
            });
        }

        const response = await openai.responses.create({
            model: "gpt-5-mini",
            input: message
        });

        res.json({
            reply: response.output_text
        });

    } catch (error) {
        console.error("AI ERROR:", error);

        res.status(500).json({
            reply: "Sorry 😭 My AI brain is having trouble right now."
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`JOMI AI is running on port ${PORT}`);
});

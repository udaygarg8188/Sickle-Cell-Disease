const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config(); // Load environment variables

const app = express();

app.use(cors({ origin: 'http://localhost:3001' }));
app.use(express.json());

// Hugging Face API configuration
const HF_API_KEY = process.env.HF_API_KEY; // Use the API key from .env
const HF_MODEL = 'facebook/blenderbot-400M-distill'; // Updated model

const getChatbotResponse = async (userMessage) => {
    try {
        console.log('User Message:', userMessage);

        const response = await fetch(`https://api-inference.huggingface.co/models/${HF_MODEL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${HF_API_KEY}`,
            },
            body: JSON.stringify({
                inputs: userMessage,
                parameters: {
                    max_new_tokens: 150,
                    temperature: 0.7,
                    top_p: 0.9,
                    repetition_penalty: 1.2,
                },
                options: {
                    wait_for_model: true,
                },
            }),
        });

        const data = await response.json();
        console.log('Hugging Face Response:', data);

        if (!response.ok) {
            console.error('API Error:', data);
            throw new Error(`Failed to generate response: ${data.error || response.statusText}`);
        }

        if (data.error) {
            throw new Error(`Error from Hugging Face: ${data.error}`);
        }

        // For BlenderBot and similar models
        if (data.generated_text) {
            return data.generated_text.trim();
        }

        // For models that return a response array
        if (Array.isArray(data) && data.length > 0 && data[0].generated_text) {
            return data[0].generated_text.trim();
        }

        return 'No response generated.';
    } catch (error) {
        console.error('Detailed Error:', error.message);
        throw new Error('Unable to generate response from Hugging Face API');
    }
};

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Invalid message format' });
    }

    try {
        const formattedMessage = `User: ${message}\nAI:`;
        const reply = await getChatbotResponse(formattedMessage);
        res.json({ reply });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const fetch = require('node-fetch'); // Importing node-fetch to make HTTP requests

// // Initialize express app
// const app = express();
// const port = 3000;

// // Use CORS to allow requests from frontend (port 3001)
// app.use(cors({
//   origin: 'http://localhost:3001', // Allow requests from the frontend (localhost:3001)
//   methods: 'GET,POST',
// }));

// // Middleware to parse incoming JSON requests
// app.use(bodyParser.json());

// // Hugging Face API configuration
// const HF_API_KEY = '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'; // Replace with your Hugging Face API key
// const HF_MODEL = 'gpt2'; // You can replace this with any Hugging Face model like 'gpt-neo', 'distilgpt2', etc.

// // Function to generate a response from Hugging Face
// const getChatbotResponse = async (userMessage) => {
//   try {
//     const response = await fetch(`https://api-inference.huggingface.co/models/${HF_MODEL}`, {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${HF_API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ inputs: userMessage }),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to generate response');
//     }

//     const data = await response.json();
//     return data[0].generated_text; // Depending on the model, you might need to adjust the response data
//   } catch (error) {
//     console.error('Error with Hugging Face API:', error);
//     throw new Error('Unable to generate response');
//   }
// };

// // POST endpoint for chatting
// app.post('/api/chat', async (req, res) => {
//   const { message } = req.body;

//   if (!message) {
//     return res.status(400).json({ error: 'Message is required' });
//   }

//   try {
//     const chatbotReply = await getChatbotResponse(message);
//     res.json({ reply: chatbotReply });
//   } catch (error) {
//     res.status(500).json({ error: 'Unable to generate response' });
//   }
// });

// // Start server on port 3000
// app.listen(port, () => {
//   console.log(`Chatbot server running at http://localhost:${port}`);
// });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize express app
const app = express();
const port = 3000;

// Use CORS to allow requests from frontend (port 3001)
app.use(cors({
  origin: 'http://localhost:3001', // Allow requests from the frontend (localhost:3001)
  methods: 'GET,POST',
}));

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Hugging Face API configuration
const HF_API_KEY = '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'; // Replace with your Hugging Face API key
const HF_MODEL = 'gpt2'; // You can replace this with any Hugging Face model like 'gpt-neo', 'distilgpt2', etc.

// Function to generate a response from Hugging Face
const getChatbotResponse = async (userMessage) => {
    try {
        const response = await fetch(`https://api-inference.huggingface.co/models/${HF_MODEL}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${HF_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ inputs: userMessage }),
        });

        if (!response.ok) {
            throw new Error(`Failed to generate response: ${response.statusText}`);
        }

        const data = await response.json();
        if (data.error) {
            throw new Error(`Error from Hugging Face: ${data.error}`);
        }

        console.log('Received from Hugging Face:', data); // Log the full response
        return data[0]?.generated_text || 'No response generated'; // Ensure to handle undefined or empty responses
    } catch (error) {
        console.error('Error with Hugging Face API:', error.message); // Log detailed error message
        throw new Error('Unable to generate response');
    }
};

// POST endpoint for chatting
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const chatbotReply = await getChatbotResponse(message);
    res.json({ reply: chatbotReply });
  } catch (error) {
    res.status(500).json({ error: 'Unable to generate response' });
  }
});

// Start server on port 3000
app.listen(port, () => {
  console.log(`Chatbot server running at http://localhost:${port}`);
});

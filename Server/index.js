require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3333;
const key=process.env.API_SECRET_KEY;

app.use(express.json());

app.post('/ask-gpt', async (req, res) => {
  try {
    const { question } = req.body;
    console.log("Before Axios Request");
    // Call the OpenAI API
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci/completions',
      {
        prompt: question,
        max_tokens: 150,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key} `,
        },
      }
    );

    const answer = response.data.choices[0].text.trim();
    
    // Send the answer back to the client
    res.json({ answer });
  } catch (error) {
    console.error(error);
    // console.error(error);
    console.error(error.response.data)
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

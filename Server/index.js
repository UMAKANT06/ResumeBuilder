require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3334;
const key=process.env.API_SECRET_KEY;

app.use(express.json());

app.post('/ask-gpt', async (req, res) => {
  try {
    const { question } = req.body;
    console.log("Before Axios Request");
    const response = await axios.post(
      // 'https://api.openai.com/v1/engines/davinci/completions',
      'https://api.openai.com/v1/engines/text-davinci-002/completions',
      {
        // model: "gpt-3.5-turbo",
        prompt: question,
        max_tokens: 150,
        // temperature: 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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 `,
        },
      }
    );

    const answer = response.data.choices[0].text.trim();
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

require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3334;
const key=process.env.API_SECRET_KEY;
const puppeteer = require('puppeteer');

app.use(express.json());

const pdf = require("html-pdf");

const options = {
  height: "160cm",
  width: "35.7cm",
  timeout: "6000",
  childProcessOptions: {
    env: {
      OPENSSL_CONF: '/dev/null',
    },
  }
};




app.post('/create-pdf', async (req, res) => {
  pdf.create(req.body.htmlTemplate, options).toStream((err, stream) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.setHeader('Content-Type', 'application/pdf');
      stream.pipe(res);
    }
  });
});

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
          'Authorization': `Bearer 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`,
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

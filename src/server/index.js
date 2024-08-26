const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors")
const fetch = require('node-fetch');
const apiKey = process.env.API_KEY
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1"

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

console.log(__dirname)

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
})

app.post('/nlp', async (req, res) => {
    const userInput = req.body.url;
    const params = new URLSearchParams({
        key: apiKey,
        url: userInput,
        lang: 'en'
    });
    const apiURL = `${baseUrl}?${params.toString()}`;
    const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await response.json();
    
    res.send(data);
})

// Setup Server
const port = 3000;
const listening = () => {
    console.log(`running on localhost: ${port}`);
};
const server = app.listen(port, listening);
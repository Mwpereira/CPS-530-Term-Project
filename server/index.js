const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

const apiKey = process.env.API_KEY || 'YOUR_API_KEY';

// Get weather info
app.get('/', (req, res) => {
    axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${apiKey}`)
        .then((weatherInfo) => {
            res.send(weatherInfo.data);
        })
        .catch((e) => console.log(e));
});

app.listen(port, (req, res) => {
    console.log(`Server listening on port ${port}`);
});

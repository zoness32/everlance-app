const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const PORT = 4000;
const app = express();

app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000"
};

const requestEndpoint = "https://www.metaweather.com/api/location/search/";

app.get('/getWeather', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: 'GET'
  }
  const response = await fetch(`${requestEndpoint}?query=(${req.loc})`, fetchOptions);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const morgan = require('morgan');

const PORT = 4000;
const app = express();

app.use(cors());
app.use(morgan('combined'));

const corsOptions = {
  origin: "http://localhost:3000"
};

const requestEndpoint = "https://www.metaweather.com/api/location/";

app.get('/doCitySearch', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: 'GET'
  }

  const location = req.query.loc;

  if (location === "")  {
    res.sendStatus(400);
  } else {
    try {
      const url = `${ requestEndpoint }search/?query=${ location }`
      console.log(url);
      const response = await fetch(url, fetchOptions);
      const jsonResponse = await response.json();
      res.json(jsonResponse);
    } catch (error) {
      console.log(error);
      res.json({error, message: "oops"});
    }
  }
});

app.get('/lookupCity', cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: 'GET'
  }

  const woeid = req.query.woeid;

  if (woeid === "")  {
    res.sendStatus(400);
  } else {
    try {
      const url = `${ requestEndpoint }${ woeid }/`
      console.log(url);
      const response = await fetch(url, fetchOptions);
      const jsonResponse = await response.json();
      res.json(jsonResponse);
    } catch (error) {
      console.log(error);
      res.json({error, message: "oops"});
    }
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
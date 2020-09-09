const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const addRoutes = require('./routes/main');

app.use(addRoutes);

//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to TASK REST API');
});


//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to DB')
);

//listening to server
const PORT = process.env.PORT;

app.listen(PORT, process.env.IP, () => {
    console.log(`Listening to PORT => ${PORT}`);
  });
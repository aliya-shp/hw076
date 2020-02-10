const express = require('express');
const cors = require('cors');


const messages = require('./application/messages');
const fileDb = require("./fileDb");

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/messages', messages);

fileDb.init();

app.listen(port, () => {
    console.log(`Started chatting on ${port} port!`);
});
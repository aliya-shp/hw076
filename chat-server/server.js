const express = require('express');
const cors = require('cors');
const nanoid = require('nanoid');

const messages = require('./application/messages');

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/messages', messages);

app.listen(port, () => {
    console.log(`Started chatting on ${port} port!`);
});
const express = require('express');
const cors = require('cors');
const nanoid = require('nanoid');

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Started chatting on ${port} port!`);
});
const express = require('express');
const fs = require('fs');

const router = express.Router();

const path = './messages';

const data = [];

router.get('/', (req, res) => {
    res.send('List of messages will be here')
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Message will be here')
});

module.exports = router;
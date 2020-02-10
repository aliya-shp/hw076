const express = require('express');
const nanoid = require('nanoid');

const fileDb = require('../fileDb');

const router = express.Router();

router.get('/', (req, res) => {
    const dateTime = req.query.dateTime;
    let messages;
    if (dateTime) {
        messages = fileDb.getMessages(dateTime);
    } else {
        messages = fileDb.getMessages();
    }

    res.send(messages);
});

// router.get('/:datetime', (req, res) => {
//     console.log(req.params.id);
//     res.send('OK');
// });

router.post('/', (req, res) => {
    const {message, author} = req.body;

    if (!message || !author) {
        const errorMessage = JSON.stringify({"error": "Author and message must be present in the request"});
        return res.status(404).send(errorMessage);
    }
    req.body.id = nanoid();
    req.body.dateTime = (new Date()).toISOString();
    console.log(req.body);
    fileDb.addMessage(req.body);
    res.send('OK');
});

module.exports = router;
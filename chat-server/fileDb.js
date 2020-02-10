const fs = require('fs');

const fileName = './db.json';

let data = [];

module.exports = {
    init() {
        try {
          const content = fs.readFileSync(fileName);
          data = JSON.parse(content.toString());
        } catch (e) {
          data = [];
        }
  },
    getMessages(dateTime = null) {
        const messagesAmount = 30;
        if (dateTime) {
            const date = new Date(dateTime);
            if (isNaN(date.getTime())) {
                return res.status(404).send('Invalid Date');
            }
            return this.getNewMessages(dateTime);
        }
        return data.sort((a, b)=> (new Date(b.dateTime)).getTime() - (new Date(a.dateTime)).getTime()).slice(0, messagesAmount);
    },
    getNewMessages(dateTime) {
        return data.filter(message => message.dateTime > dateTime).sort((a, b) => (new Date(b.dateTime)).getTime() - (new Date(a.dateTime)).getTime());
    },
    addMessage(message) {
        data.push(message);
        this.save();
    },
    save() {
        const content = JSON.stringify(data, null, 2);
        fs.writeFileSync(fileName, content);
    }
};
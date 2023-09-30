const mongoose = require('mongoose');

const url = 'mongodb+srv://nasreenkhan61926:1234@cluster0.6apuwbk.mongodb.net/mydb?retryWrites=true&w=majority'

// asynchronous - return Promise

mongoose.connect(url)
.then((result) => {
    console.log('database connection Successfully');
})
.catch((err) => {
    console.log(err)
});

module.exports = mongoose;



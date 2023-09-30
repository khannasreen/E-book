const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name: String,
    avatar: String,
    author: String,
    date: Date,
    Publisher: String,
    Language: String,
    Rating: String,
    Reviews: String,
    category:String,
    Price:Number,
});

module.exports = model('ebook', mySchema);




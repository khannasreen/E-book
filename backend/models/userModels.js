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
});

module.exports = model('ebook', mySchema);




// sir code
// const { model, Schema } = require('../connection');

// const mySchema = new Schema({
//     name : String,
//     email : String,
//     password : String,
//     age : Number,
//     avatar: String
// });

// module.exports = model( 'user', mySchema );
// sir code end
// import expree
const express = require('express');
const bookRouter = require('./router/bookRouter');


// initialize express
const app = express();
const port = 5000;




// middlewares
app.use(express.json());
app.use('/ebook', bookRouter);


// Starting the server
app.listen(port, () => { console.log('express server started') });




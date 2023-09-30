// import expree
const express  = require ('express');
const userRouter = require('./router/userRouter');


// initialize express
const app = express();
const port = 5000;




// middlewares
app.use(express.json());
app.use('/ebook', userRouter);


// Starting the server
app.listen(port, () => {console.log('express server started')});




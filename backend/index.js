// import expree
const express  = require ('express');
const userRouter = require('./router/userRouter');


// initialize express
const app = express();
const port = 5000;


// app.use( '/user', userRouter );
//  app.use(express.json());

// middlewares
app.use(express.json());
app.use('/ebook', userRouter);

// routes
// app.get('/', (req, res) => {
//     res.send('respond from index');
// });

// app.get('/user', (req, res) => {
//     res.send('respond from user 2')
// })

// app.get('/contact', (req, res) => {
//     res.send('response form contact')
// })
// Starting the server
app.listen(port, () => {console.log('express server started')});




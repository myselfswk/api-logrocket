const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// import routes
const booksRoutes = require('./routes/api/books');
const app = express();

//Connect Database
connectDB();

//Cors
app.use(cors({
    origin: true,
    credentials: true
}));

//Init Middleware
app.use(express.json({
    extended: false
}));

app.get('/', (req, res) => res.send('An API...'));

//Use Routes
app.use('/api/books', booksRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`App is Up and Running at ${port}`));
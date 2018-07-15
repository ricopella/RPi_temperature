const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = process.env.PORT;
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

// Routes
const temp = require('./routes/api/temp_prob');

app.use(logger('dev'));

mongoose.Promise = Promise;
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.text());

// Routes
app.use('/api/temp', temp);


app.use((req, res) => res.status(404).send("Sorry can't find that!"));
app.listen(port, () => console.log(`==> 🌎  Listening on PORT ${port}. Visit http://localhost:${port}`));
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import saveNewTemp from './scripts/addTemperature';

const port = process.env.PORT | 3001;
const app = express();

dotenv.config();

// Routes
import temp from './routes/api/temp_prob';

app.use(morgan('dev'));

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
app.use(cors());
app.use('/api/temp', temp);

//  Server static assets if in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(`${__dirname}/../client/build`));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../client/build/index.html'));
	});
}

setInterval(saveNewTemp, 300000);

app.use((req, res) => res.status(404).send('Sorry can\'t find that!'));
app.listen(port, () => console.log(`==> 🌎  Listening on PORT ${port}. Visit http://localhost:${port}`));

export default app;
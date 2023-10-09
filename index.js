import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

//components
import Connection from './connection/db.js';
import Route from './routes/Route.js';
import DefaultData from './default.js'

const app = express();
dotenv.config();
app.set("trust proxy", 1)
app.use(cors({origin : 'https://65245d9730106b351dac7431--fabulous-tapioca-1868aa.netlify.app/' , credentials : true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/', Route);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const PORT = process.env.port || 8000;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();

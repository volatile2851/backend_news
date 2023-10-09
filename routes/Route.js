import express from 'express';

import { getNews } from '../controller/news-controller.js';
import {news_adding} from '../controller/add-news.js';

const route = express.Router();



route.post('/register' , news_adding);
route.get('/news', getNews);



export default route;
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {bibleAPI} from './api/bible.api';

//// config
const PORT = 1200;
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(cors({origin: true}));


//// routes
app.use('/bible',bibleAPI);

app.listen(PORT, ()=> {
    console.log('TBN - Server Application [started]');
})
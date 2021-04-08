import express from 'express';
import * as bibleHandler from '../service/bible.handler'
//import * as bodyParser from 'body-parser';

export const bibleAPI = express();

bibleAPI.get('/', (req, res) => {
    console.log("bibleApi - init");
    res.send('Biblia API')
})

bibleAPI.post('/version', (req, res) => {
    const { version }: {
        version: string
    } = req.body;
    bibleHandler.getAllBooks(version).then((result) => {
        console.log("Biblia - Request Array of Books - finish");
        res.send(result);
    }).catch((err) => {
        console.error('Biblia - Error in read of file database: ', err);
    })
})

bibleAPI.post('/version/livro', (req, res) => {
    const { version, name }: {
        version: string,
        name: string
    } = req.body;
    bibleHandler.getAllChapter(version, name).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error('Biblia - Error: ', err);
    });
})

bibleAPI.post('/version/livro/capitulo', (req, res) => {
    const { version, name, chapterNumber }: {
        version: string,
        name: string,
        chapterNumber: number
    } = req.body;
    bibleHandler.getChapter(version, name, chapterNumber).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error('Biblia - Error: ', err);
    });
})

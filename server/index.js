import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';

import renderer from './helpers/renderer.js';
import dataSmall from './store/dataSmall.json';
import dataBig from './store/dataBig.json';

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/dataBig', (req, res) => {
    res.send(dataBig)
});

app.get('/dataSmall', (req, res) => {
    res.send(dataSmall)
});

app.get('*', (req, res) => {
    res.send(renderer(req))
});

app.listen(3000, () => {
    console.log('App started on port 3000');
});
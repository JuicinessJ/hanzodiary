const html = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// const { v4: uuidv4 } = require('uuid');

html.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

html.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

module.exports = html;
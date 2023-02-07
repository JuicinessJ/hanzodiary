const api = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// const { v4: uuidv4 } = require('uuid');

api.get('/', (req, res) => {
    res.sendFile(path)
})


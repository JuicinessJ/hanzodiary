const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

// localhost:3001/anything else
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})


module.exports = router;
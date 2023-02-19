const router = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');
const { response } = require('express');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})


router.get('/api/notes', (req, res) => {
    res.json('db.json');
})


router.post('/api/notes', (req, res) => {
    //should receive a new note to save on the request body. add it to the db.json file, and then return the new note to the client.
    //need to find a way to give each note a unique id when it's saved. (uuid?);

    if (req.body) {
        const { title, text } = req.body

    // res.status(200).json(response) res.status(500).json(error)
        const newNote = {
            title,
            text,
            id: uuid4(), // you have to add this to the request body
        }
    }
})

// localhost:3001/api/notes/23423423e
router.delete('/api/notes/:id', (req, res) => {
    //should receive a query parameter containing the id of a note to delete. In order to delete a note, I'll need to read all notes from the db.json file
    //remove the note with the given id and rewrite the notes to db.json file (for loop?)
    const noteId = req.params.id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((data) => {
        const newArray = data.filter((singleNote) => {singleNote.id !== req.params.id})
        writeToFile('./db/db.json', JSON.stringify(newArray));
        res.json(`Note ${singleNote.id} has been deleted`)
    });
})

module.exports = router;
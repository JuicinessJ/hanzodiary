const router = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})


router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => {
        res.json(JSON.parse(data));
    })
})


router.post('/notes', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added Successfully`);
    } else {
        res.error('Error in adding Note')
    }
});

// localhost:3001/api/notes/23423423e
router.delete('/notes/:id', (req, res) => {
    const singleNote = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((data) => {
            const newArray = data.filter((singleNote) => singleNote.id != req.params.id)
            writeToFile('./db/db.json', JSON.stringify(newArray));
            res.json(`Note ${singleNote.id} has been deleted`);
        });
})

module.exports = router;
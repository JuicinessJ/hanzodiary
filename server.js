const express = require('express');
const app = express();
const notes = require('./db/db.json');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => 
console.log(`App listening at http://localhost:${PORT}`)
);
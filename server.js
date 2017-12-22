const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors()); // this is okay for testing but not for live projects.

app.get('/api/get-stuff', (req, res) => {
    const stuff = {
        name: 'stuffing',
        message: 'Here is some stuff'
    };
    res.send(stuff)
});

app.get('/api/better-stuff',(req,res) => {
    const betterStuff = {
        better: 'this is better stuff',
        message: 'here is more'
    };
    res.send(betterStuff);
});

app.get('*',(req, res) =>{
    res.send('<h1>Awesome app working</h1>');
});

app.listen(PORT, () => {
    console.log('Server is running at localhost:' + PORT);
});
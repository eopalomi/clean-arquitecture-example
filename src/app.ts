import express from 'express';

const app = express();

const port = 3600;

app.get('/', (req, res) => {
    res.send('server running ok');
});


app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
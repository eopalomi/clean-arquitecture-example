import express from 'express';
import cors from 'express';
import routes from './cronograma/infrastructure/route/cronograma.route' 

const app = express();
app.use(cors())
app.use(express.json())

const port = 3600;

app.use(routes);

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});

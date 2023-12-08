import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser';
import Routes from './routes/index.js'
import client from './connection.js';

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', Routes);

app.listen(port, () => {
    console.log(`App listen on port ${port}`);
});

client.connect(err => {
    if (!err) {
        console.log('Database connect')
    } else {
        console.log(err.message)
    }
})
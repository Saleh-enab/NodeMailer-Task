import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes';
import mongoose from 'mongoose';
dotenv.config();

const app = express();
app.use(express.json());
routes(app);


const port = Number(process.env.PORT) || 3000;
const dbURI = process.env.MongoURI;


if (dbURI === undefined) {
    console.error('Error while connecting to the Datebase')
} else {
    (async () => {
        try {
            await mongoose.connect(dbURI)
            app.listen(port, () => {
                console.info(`App runs successfully, Listening on port ${port}`)
            })

        } catch (err: any) {
            console.error(err.message)
        }
    })();
}

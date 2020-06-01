import dotenv from 'dotenv';
import express from 'express';
import Loaders from './loaders';
import config from './config';
import processCityList from './services/meteo/cityListService';

dotenv.config();

const app = async () => {
    const app = express();
    const { port } = config;

    await Loaders({ app });
    app.listen(port, () => console.log(`App listening on port ${port}`));
    processCityList().then(() => {
        console.log('data');
        console.log('valu');
    });
};

app();

export default app;

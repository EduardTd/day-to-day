import config from '../config';
import mongoose from 'mongoose';

const { mongoUri } = config;

mongoose.Promise = Promise;

mongoose.connection.once('connected', () => {
    console.log('Connection to database established');
});

mongoose.connection.on('reconnected', () => {
    console.log('Connection to database reestablished');
});

mongoose.connection.on('disconnected', () => {
    console.log('Connection to database disconnected');
});

mongoose.connection.on('close', () => {
    console.log('Connection to database closed');
});

mongoose.connection.on('error', error => {
    throw new Error(error);
});

const MongoDbLoader = async () => {
    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
};

export default MongoDbLoader;

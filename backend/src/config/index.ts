import dotenv from 'dotenv';

// Set the NODE_ENV to development by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFile = dotenv.config({ path: `${__dirname}/./../../.env` });

if (!envFile) {
    throw new Error("Couldn't find .env file️");
}

if (envFile.error) {
    throw new Error(envFile.error.message);
}

export default {
    port: parseInt(process.env.PORT, 10),
    mongoUri: process.env.MONGO_URI,
};

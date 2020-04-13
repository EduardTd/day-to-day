import ExpressLoader from './express';
import MongoDbLoader from './mongoDb';

const Loaders = async ({ app }) => {
    await ExpressLoader({ app });
    await MongoDbLoader();
};

export default Loaders;

import mongoose from 'mongoose';

const cityModelName = 'City';
const cityCollectionName = 'city_list';
type TCitySchema = {
    cityId: number;
    code: string;
    name: string;
    administrativeDivision: string;
    countryCode: string;
};

const cityListSchema = new mongoose.Schema(
    {
        cityId: {
            type: Number,
            unique: true,
            required: true,
        },
        code: {
            type: String,
            unique: true,
            required: true,
        },
        name: String,
        administrativeDivision: String,
        countryCode: String,
    },
    {
        timestamps: true,
    },
);

const CityListModel = mongoose.model(cityModelName, cityListSchema, cityCollectionName);

export default CityListModel;
export { cityCollectionName, TCitySchema };

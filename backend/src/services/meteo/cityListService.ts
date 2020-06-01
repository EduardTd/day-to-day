import mongoose from 'mongoose';
import CityListModel from '../../models/meteo/cityList';
import { cityCollectionName, TCitySchema } from '../../models/meteo/cityList';
import { getMeteoCityList } from './requests';
import { AxiosResponse } from 'axios';

const saveCityListItem = (cityData: TCitySchema) => {
    const cityList = new CityListModel(cityData);

    cityList.save(error => {
        if (!error) {
            return;
        }

        console.error(error);
    });
};

const saveByOne = list => {
    list.forEach((cityData, index) => {
        const formattedCityData = { cityId: index, ...cityData };

        saveCityListItem(formattedCityData);
    });
};

const meteoResponseHandler = (response: AxiosResponse) => {
    try {
        const listData = response.data;

        if (!listData.length) {
            return;
        }

        saveByOne(listData);
    } catch (error) {
        console.error(error);
    }
};

const saveIfNotExists = async (quantity: number) => {
    if (quantity) {
        return;
    }

    const responseData = await getMeteoCityList();
    meteoResponseHandler(responseData);
};

const processCityList = async () => {
    const cityCollection = mongoose.connection.db.collection(cityCollectionName);
    const cityQuantity = cityCollection.countDocuments();
    saveIfNotExists(cityQuantity);
};

export default processCityList;

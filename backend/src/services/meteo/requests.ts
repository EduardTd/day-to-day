import Axios from 'axios';

const METEO_BASE_URL = 'https://api.meteo.lt/v1';
const METEO_PLACES_ENDPOINT = `${METEO_BASE_URL}/places`;

const getRequestUrlByCity = (city: string) => {
    return `${METEO_PLACES_ENDPOINT}/${city}/forecasts/long-term`;
};

const getMeteoCityList = () => {
    return Axios.get(METEO_PLACES_ENDPOINT);
};

const getDataByCity = (city: string) => {
    return Axios.get(getRequestUrlByCity(city));
};

export { getMeteoCityList, getDataByCity };

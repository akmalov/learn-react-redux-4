import axios from 'axios'

const API_KEY = '8c02f896906a07e780a7845c837f4061';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ru`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
import axios from "axios";

const apiBaseUrl = 'https://newsapi.org/v2';
const newsApiKey = '742f6e7ba13c4eb0a214a016d7f121ac';

const getByCategory = (category) =>
    `${apiBaseUrl}/everything?q=${category}&apiKey=${newsApiKey}`


const newsApiCall = async (endpoints, params) => {
    const options = {
        method: "GET",
        url: endpoints,
        params: params ? params : {},
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log(error);
        return {};
    }
};

export const fetchSearchNews = async (query) => {
    const endpoint = getByCategory(query);
    return await newsApiCall(endpoint);
};
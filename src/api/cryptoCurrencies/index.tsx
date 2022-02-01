import { apiClient } from '../index';

const getAllCurrencies = () => apiClient.get('/sector/w/lite-list');

export { getAllCurrencies };

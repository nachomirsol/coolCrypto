import { apiClient } from '../index';

const getCurrencies = () => apiClient.get('/sector/w/lite-list');

export default { getCurrencies };

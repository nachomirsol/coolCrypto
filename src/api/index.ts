/** Libraries */
import axios from 'axios';
/** Constants */
import { API } from 'constants/api';

const { BASE_URL, VERSION } = API;

export const apiClient = axios.create({
	// Later read this URL from an environment variable
	baseURL: `${BASE_URL}/${VERSION}`,
});

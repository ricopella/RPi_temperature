import axios from 'axios';
import { AxiosPromise } from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001/api';

interface Helpers {
  getCurrentTemp: () => AxiosPromise<any>;
  getTempTest: () => AxiosPromise<any>;
}

const helpers: Helpers = {
  getCurrentTemp: () => axios.get('/api/temp/now'),
  getTempTest: () => axios.get('/api/temp/test'),
};

export default helpers;

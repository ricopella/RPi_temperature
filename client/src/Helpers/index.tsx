import axios from 'axios';
import { AxiosPromise } from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api';

interface Helpers {
  getCurrentTemp: () => AxiosPromise<any>;
}

const helpers: Helpers = {
  getCurrentTemp: () => axios.get('/temp/now'),
};

export default helpers;

import axios from 'axios';
const qs = require('querystring');
// import Cookies from 'js-cookie';

const BASE_URL = '';

class CallAPI {
	getOption = (api, params = {}) => {
		const options = {
			url: `${BASE_URL}${api}`,
			method: 'POST',
			type: 'json',
			data: qs.stringify(params),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			}
		}

		return options;
	}

	dispatch = (api, params) => {
		const options = this.getOption(api, params);
		return axios(options).then(result => {
			return result.data;
		}).catch(error => {
			throw error;
		});
	}
}

const callAPI = new CallAPI();
export default callAPI.dispatch.bind(callAPI);
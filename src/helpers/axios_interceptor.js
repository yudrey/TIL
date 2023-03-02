import axios from 'axios';

const APPLICATION_JSON = 'application/json';
const UTF_8 = 'UTF-8';

// The code below is required for using devServer proxy in vue.config.js
const instance = axios.create({
	baseURL: process.env.NODE_ENV === 'local' ? process.env.BASE_URL : '',
});

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

// Request interceptor
instance.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		config.headers['withCredentials'] = true;
		config.headers['Content-Type'] = `${APPLICATION_JSON}; ${UTF_8}`;
		config.headers['Accept'] = APPLICATION_JSON;
		console.log('AXIOS HEADER ', config);

		return config;
	},
	// Request error
	function (error) {
		// Do something with request error
		console.error('request error ', error);
		return Promise.reject(error);
	}
);

// Response interceptor
instance.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2XX(Success) cause this function to trigger
		// http status: 200(OK), 201(Created), 202(Accepted), 204(No Content)
		console.log('::: Server Response for Client Request :::');
		console.log('::: HTTP Status Code = 2xx(Success) :::');
		return response;
	},
	// Response error
	function (error) {
		console.error('HTTP Status error ', error);
		return Promise.reject(error);
	}
);

export default axios;

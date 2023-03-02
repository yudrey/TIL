import AxiosInterceptor from './axios_interceptor';

/**
 * @displayName testApiPOST
 * @description POST 방식 API
 * @param -
 * @returns {Promise<AxiosResponse<*>|*>}
 */
const testApiPOST = async () => {
	// let data = {};
	return await requestPost(`https://`);
};

/**
 * @displayName testApiGET
 * @description GET 방식 API
 * @returns {Promise<AxiosResponse<*>|*>}
 */
const testApiGET = async () => {
	return await requestGet(`https://`);
};

/**
 * axios request post
 * @displayName requestPost
 * @param url	URL String
 * @param data	Data JSON
 * @param headers	Headers JSON
 * @returns {Promise<AxiosResponse<any>|*>}
 */
const requestPost = async (url, data = {}, headers = null) => {
	try {
		const response = await AxiosInterceptor.post(url, data, headers);
		console.log('API Response[POST]: ', response);

		if (response.status !== 200) {
			console.error('Request Success but HTTP Status Code is', response.status);
		} else {
			return response;
		}
	} catch (err) {
		console.error(`API Request err`, err);
		return Promise.resolve(err);
	}
};

/**
 * axios request get
 * @displayName requestGet
 * @param url	URL String
 * @param headers	Headers JSON
 * @returns {Promise<unknown>}
 */
const requestGet = async (url, headers = null) => {
	try {
		const response = await AxiosInterceptor.get(url, headers);
		console.log('API Response[GET]: ', response);

		if (response.status !== 200) {
			console.log('Request Success but HTTP Status Code is', response.status);
			alert(`Request Success but HTTP Status Code is '${response.status}'`);
		} else {
			return response;
		}
	} catch (err) {
		console.error(`API Request err`, err);
		return Promise.resolve(err);
	}
};

const API = {
	testApiGET,
	testApiPOST,
};

export default API;

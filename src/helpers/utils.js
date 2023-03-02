import { uuid } from 'vue-uuid';

// blacnk
const BLANK = '';
const SPACE = ' ';

/**
 * @displayName guid
 * @returns {*}
 */
const guid = () => {
	return UUID(4);
};

/**
 * @displayName uuid
 * @param version version number {1, 3, 4, 5}
 * @returns {null}
 */
const UUID = version => {
	var uuidString;

	switch (version) {
		case 1:
			uuidString = uuid.v1(); // MAC address
			break;

		case 3:
			uuidString = uuid.v3(); // MD5 Hash
			break;

		case 4:
			uuidString = uuid.v4(); // Random
			break;

		case 5:
			uuidString = uuid.v5(); // SHA-1 Hash
			break;

		default:
			uuidString = null;
			break;
	}
	return uuidString;
};

/**
 * @displayName timestamp
 * @returns {number}
 */
const timestamp = () => {
	return Math.round(+new Date());
};

/**
 * @displayName datetimeFrom
 * @param timestamp	UNIX timestamp
 * @return {Date}
 */
const datetimeFrom = timestamp => {
	return new Date(timestamp);
};

/**
 * @displayName isEmpty
 * @description Checks if a parameter is empty ('') or null.
 * @param value String value to check
 * @returns {boolean}
 */
const isEmpty = value => {
	return (
		value === null ||
		value === '' ||
		value === undefined ||
		(value !== null && typeof value == 'object' && !Object.keys(value).length)
	);
};

/**
 * @displayName isNotEmpty
 * @description Checks whether a parameter is empty ('') or null. !isEmpty
 * @param value String value to check
 * @returns {boolean}
 */
const isNotEmpty = value => {
	return !isEmpty(value);
};

/**
 * @displayName isBlank
 * @description Checks if a parameter is empty (''), null or whitespace only.
 * @param value String value to check
 * @returns {boolean}
 */
const isBlank = value => {
	return isEmpty(value !== null ? value.trim() : value);
};

/**
 * @displayName isNotBlank
 * @description Checks whether a parameter is empty (''), null or whitespace only. !isBlank
 * @param value
 * @returns {boolean}
 */
const isNotBlank = value => {
	return !isBlank(value);
};

/**
 * @displayName defaultIfEmpty
 * @description Returns either the passed in parameter, or if the parameter is empty('') or null, the value of defaultStr.
 * @param value String value to check
 * @param defaultStr the default String
 * @returns {*} the passed in parameter, or the default
 */
const defaultIfEmpty = (value, defaultStr) => {
	return isEmpty(value) ? defaultStr : value;
};

/**
 * @displayName defaultIfBlank
 * @description Returns either the passed in parameter, or if the parameter is whitespace, empty('') or null, the value of defaultStr.
 * @param value String value to check
 * @param defaultStr the default String
 * @returns {*} the passed in parameter, or the default
 */
const defaultIfBlank = (value, defaultStr) => {
	return isBlank(value) ? defaultStr : value;
};

/**
 * @displayName userAgent
 * @returns {string} userAgent String
 */
const userAgent = () => {
	return window.navigator.userAgent;
};

/**
 * @displayName platform
 * @returns {string}
 */
const platform = () => {
	return window.navigator.platform;
};

const Main = {
	BLANK,
	SPACE,
	guid,
	UUID,
	timestamp,
	datetimeFrom,
	isEmpty,
	isNotEmpty,
	isBlank,
	isNotBlank,
	defaultIfEmpty,
	defaultIfBlank,
	userAgent,
	platform,
};

export default Main;

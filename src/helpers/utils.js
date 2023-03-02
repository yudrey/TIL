import { uuid } from 'vue-uuid';

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

const Main = {
	guid,
	UUID,
	timestamp,
	datetimeFrom,
};

export default Main;

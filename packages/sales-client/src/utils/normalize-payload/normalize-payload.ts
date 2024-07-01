import _ from 'lodash';

export const normalizePayload = <T extends object>(obj: T): T => {
	return _.transform(obj, (result: any, value, key) => {
		if (_.isArray(value)) {
			result[key] = value;
		} else if (_.isObject(value)) {
			result[key] = normalizePayload(value);
		} else if (typeof value === 'string') {
			const trimmedValue = value.trim();
			result[key] = trimmedValue === '' ? null : trimmedValue;
		} else if (typeof value === 'number' && Number.isNaN(value)) {
			result[key] = null;
		} else {
			result[key] = value;
		}
	}) as T;
};

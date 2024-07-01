/* eslint-disable no-restricted-imports */
import { normalizePayload } from './normalize-payload';

describe('normalizePayload', () => {
	it('should trim strings, replace empty strings with null', () => {
		const initialValues = {
			full_name: 'Ivan',
			address: '',
			representatives: [],
			accounts: {},
			properties: {
				age: 31,
				details: {
					email: 'email',
					phone: '',
					number: 0,
					tags: { all: [] },
					dates: { date: '2024-02-28 ', text: '   ' },
					groups: [1, 2],
					value: NaN,
					friends: undefined,
				},
				passport: null,
				snils: 12345,
			},
			dob: '2000-02-13',
			string: ' string ',
		};

		const expectedValues = {
			full_name: 'Ivan',
			address: null,
			representatives: [],
			accounts: {},
			properties: {
				age: 31,
				details: {
					email: 'email',
					phone: null,
					number: 0,
					tags: { all: [] },
					dates: { date: '2024-02-28', text: null },
					groups: [1, 2],
					value: null,
					friends: undefined,
				},
				passport: null,
				snils: 12345,
			},
			dob: '2000-02-13',
			string: 'string',
		};

		const result = normalizePayload(initialValues);
		expect(result).toEqual(expectedValues);
	});

	it('should not remove empty object', () => {
		const obj = {};
		const expected = {};
		const result = normalizePayload(obj);
		expect(result).toEqual(expected);
	});
});

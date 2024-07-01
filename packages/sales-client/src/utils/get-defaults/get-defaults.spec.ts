/* eslint-disable no-restricted-imports */
import { z } from 'zod';

import { getDefaults } from './get-defaults';

describe('getDefaults', () => {
	it('should return default values', () => {
		const initialValues = z.object({
			number: z.number().default(0),
			issued: z.string().default(''),
			code: z.string().default(''),
			place_of_birth: z.string().default(''),
			registration_address: z.string().default(''),
			is_active: z.boolean().default(false),
			obj1: z
				.object({
					foo: z.string().default('bar'),
				})
				.nullable()
				.default(null),
			obj2: z.object({
				foo: z.string().default('bar'),
			}),
		});

		const expectedValues = {
			number: 0,
			issued: '',
			code: '',
			place_of_birth: '',
			registration_address: '',
			is_active: false,
			obj1: null,
			obj2: {
				foo: 'bar',
			},
		};

		const result = getDefaults(initialValues);
		expect(result).toEqual(expectedValues);
	});
});

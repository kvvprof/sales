import { ZodDefault, ZodObject, z } from 'zod';

export const getDefaults = <Schema extends ZodObject<any>>(
	schema: Schema,
): z.infer<Schema> => {
	return Object.fromEntries(
		Object.entries(schema.shape).map(([key, value]) => {
			if (value instanceof ZodDefault) {
				return [key, value._def.defaultValue()];
			} else if (value instanceof ZodObject) {
				return [key, getDefaults(value)];
			} else {
				return [key, null];
			}
		}),
	) as z.infer<Schema>;
};

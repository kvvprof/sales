import { ZodDefault, ZodObject, z, ZodArray } from 'zod';

export const getDefaults = <Schema extends ZodObject<any>>(
  schema: Schema,
): z.infer<Schema> => {
  return Object.fromEntries(
    Object.entries(schema.shape).map(([key, value]) => {
      if (value instanceof ZodDefault) {
        return [key, value._def.defaultValue()];
      } else if (value instanceof ZodObject) {
        return [key, getDefaults(value)];
      } else if (value instanceof ZodArray) {
        const elementSchema = value.element;
        if (elementSchema instanceof ZodObject) {
          return [key, [getDefaults(elementSchema)]];
        } else {
          return [key, []];
        }
      } else {
        return [key, null];
      }
    }),
  ) as z.infer<Schema>;
};

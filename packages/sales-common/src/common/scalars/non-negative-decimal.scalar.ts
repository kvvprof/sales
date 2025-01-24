import { Decimal } from 'decimal.js';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export const NonNegativeDecimalResolver = new GraphQLScalarType({
  name: 'NonNegativeDecimal',
  description: 'Non-negative decimal scalar type.',

  serialize(value: any) {
    const parsedValue = new Decimal(value);

    if (parsedValue.isNegative() || !parsedValue.isFinite()) {
      throw new TypeError('Value is not a valid non-negative decimal value.');
    }

    return parsedValue.toString();
  },

  parseValue(value) {
    if (typeof value !== 'string' && typeof value !== 'number') {
      throw new TypeError('Value is not a valid non-negative decimal value.');
    }

    const parsedValue = new Decimal(value);

    if (parsedValue.isNegative() || !parsedValue.isFinite()) {
      throw new TypeError('Value is not a valid non-negative decimal value.');
    }

    return parsedValue.toString();
  },

  parseLiteral(ast: any) {
    if (
      ast.kind !== Kind.STRING &&
      ast.kind !== Kind.INT &&
      ast.kind !== Kind.FLOAT
    ) {
      throw new TypeError('Value is not a valid non-negative decimal value.');
    }

    const parsedValue = new Decimal(ast.value);

    if (parsedValue.isNegative() || !parsedValue.isFinite()) {
      throw new TypeError('Value is not a valid non-negative decimal value.');
    }

    return parsedValue.toString();
  },
});

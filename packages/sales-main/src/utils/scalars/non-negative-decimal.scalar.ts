import BigNumber from 'bignumber.js';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export const NonNegativeDecimalResolver = new GraphQLScalarType({
	name: 'NonNegativeDecimal',
	description: 'Non-negative decimal scalar type.',

	serialize(value: any) {
		const parsedValue = new BigNumber(value);

		if (parsedValue.isNegative() || parsedValue.isNaN()) {
			throw new TypeError('Value is not a valid non-negative decimal value.');
		}

		return parsedValue;
	},

	parseValue(value) {
		if (typeof value !== 'string' && typeof value !== 'number') {
			throw new TypeError('Value is not a valid non-negative decimal value.');
		}

		const parsedValue = new BigNumber(value);

		if (parsedValue.isNegative() || parsedValue.isNaN()) {
			throw new TypeError('Value is not a valid non-negative decimal value.');
		}

		return parsedValue;
	},

	parseLiteral(ast: any) {
		if (
			ast.kind !== Kind.STRING &&
			ast.kind !== Kind.INT &&
			ast.kind !== Kind.FLOAT
		) {
			throw new TypeError('Value is not a valid non-negative decimal value.');
		}

		const parsedValue = new BigNumber(ast.value);

		if (parsedValue.isNegative() || parsedValue.isNaN()) {
			throw new TypeError('Value is not a valid non-negative decimal value.');
		}

		return parsedValue;
	},
});

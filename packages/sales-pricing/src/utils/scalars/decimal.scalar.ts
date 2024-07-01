import BigNumber from 'bignumber.js';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export const DecimalResolver = new GraphQLScalarType({
	name: 'Decimal',
	description: 'Decimal scalar type.',

	serialize(value: any) {
		const parsedValue = new BigNumber(value);

		if (parsedValue.isNaN()) {
			throw new TypeError('Value is not a valid decimal value.');
		}

		return parsedValue;
	},

	parseValue(value) {
		if (typeof value !== 'string' && typeof value !== 'number') {
			throw new TypeError('Value is not a valid decimal value.');
		}

		const parsedValue = new BigNumber(value);

		if (parsedValue.isNaN()) {
			throw new TypeError('Value is not a valid decimal value.');
		}

		return parsedValue;
	},

	parseLiteral(ast: any) {
		if (
			ast.kind !== Kind.STRING &&
			ast.kind !== Kind.INT &&
			ast.kind !== Kind.FLOAT
		) {
			throw new TypeError('Value is not a valid decimal value.');
		}

		const parsedValue = new BigNumber(ast.value);

		if (parsedValue.isNaN()) {
			throw new TypeError('Value is not a valid decimal value.');
		}

		return parsedValue;
	},
});

import {
	DateTimeResolver,
	JSONResolver,
	NonEmptyStringResolver,
	NonNegativeIntResolver,
	PositiveIntResolver,
	DateResolver,
} from 'graphql-scalars';
import gql from 'graphql-tag';
import { injectable } from 'inversify';

import { ISchema } from '@/common/schema.interface';
import { DecimalResolver } from '@/utils/scalars/decimal.scalar';
import { NonNegativeDecimalResolver } from '@/utils/scalars/non-negative-decimal.scalar';
import { PositiveDecimalResolver } from '@/utils/scalars/positive-decimal.scalar';

@injectable()
export class BaseSchema implements ISchema {
	constructor() {}

	public getTypeDefs() {
		return gql`
			scalar Date
			scalar DateTime
			scalar JSON
			scalar Decimal
			scalar NonNegativeDecimal
			scalar PositiveDecimal
			scalar NonNegativeInt
			scalar PositiveInt
			scalar NonEmptyString

			input BasicOptionsInput {
				limit: NonNegativeInt
				offset: NonNegativeInt
				prefix: NonEmptyString
			}
		`;
	}

	public getResolvers() {
		return {
			Date: DateResolver,
			DateTime: DateTimeResolver,
			JSON: JSONResolver,
			Decimal: DecimalResolver,
			NonNegativeDecimal: NonNegativeDecimalResolver,
			PositiveDecimal: PositiveDecimalResolver,
			NonNegativeInt: NonNegativeIntResolver,
			PositiveInt: PositiveIntResolver,
			NonEmptyString: NonEmptyStringResolver,
		};
	}
}

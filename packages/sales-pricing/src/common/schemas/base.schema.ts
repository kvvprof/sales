import { DocumentNode } from 'graphql';
import {
  DateTimeResolver,
  JSONResolver,
  NonEmptyStringResolver,
  NonNegativeIntResolver,
  PositiveIntResolver,
} from 'graphql-scalars';
import gql from 'graphql-tag';
import { injectable } from 'inversify';

import { DecimalResolver } from '@/common/scalars/decimal.scalar';
import { NonNegativeDecimalResolver } from '@/common/scalars/non-negative-decimal.scalar';
import { PositiveDecimalResolver } from '@/common/scalars/positive-decimal.scalar';
import { ISchema } from '@/common/types/schema.interface';
import { Resolvers } from '@/common/types/schema.types';

@injectable()
export class BaseSchema implements ISchema {
  constructor() {}

  public getTypeDefs(): DocumentNode {
    return gql`
      scalar DateTime
      scalar JSON
      scalar Decimal
      scalar NonNegativeDecimal
      scalar PositiveDecimal
      scalar NonNegativeInt
      scalar PositiveInt
      scalar NonEmptyString

      input BaseOptionsInput {
        limit: NonNegativeInt
        offset: NonNegativeInt
        prefix: NonEmptyString
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
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

import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema, Resolvers, TYPES } from '@/common';
import { IContractorService } from '@/modules/contractor/service/contractor.service.interface';

@injectable()
export class ContractorSchema implements ISchema {
  constructor(
    @inject(TYPES.ContractorService)
    private readonly contractorService: IContractorService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      type BasicCommonContractor {
        id: PositiveInt!
        name: String!
        shortName: String
        inn: String
        kpp: String
        ogrn: String
        legalAddress: String
        actualAddress: String
        contacts: String
        reconciliationLink: String
        isActive: Boolean
        propogatedAt: DateTime
        phone: String
      }

      type BasicCommonAccount {
        id: PositiveInt!
        number: String
        bank: BasicCommonBank
      }

      type BasicCommonBank {
        id: PositiveInt!
        name: String!
        city: String
        bik: String
        correspondentNumber: String
      }

      type CommonContractor {
        contractor: BasicCommonContractor!
        accounts: [BasicCommonAccount!]
      }

      type CommonContractors {
        contractors: [CommonContractor!]!
        totalCount: PositiveInt!
      }

      input GetCommonContractorInput {
        id: PositiveInt!
      }

      input GetCommonContractorsInput {
        options: BaseOptionsInput
      }

      type Query {
        getCommonContractor(input: GetCommonContractorInput!): CommonContractor!
        getCommonContractors(
          input: GetCommonContractorsInput
        ): CommonContractors!
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
      Query: {
        getCommonContractor: async (_, { input }) => {
          return this.contractorService.getContractor(input);
        },
        getCommonContractors: async (_, { input }) => {
          return this.contractorService.getContractors(input);
        },
      },
    };
  }
}

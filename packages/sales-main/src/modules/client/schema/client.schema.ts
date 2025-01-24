import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { TYPES, ISchema, Resolvers } from '@/common';
import { IClientService } from '@/modules/client/service/client.service.interface';

@injectable()
export class ClientSchema implements ISchema {
  constructor(
    @inject(TYPES.ClientService) private readonly clientService: IClientService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      enum ClientCategory {
        INDIVIDUAL
        INDIVIDUAL_MINOR
        ENTITY
      }

      type BasicClient {
        id: PositiveInt!
        fullName: NonEmptyString!
        inn: NonEmptyString
        phone: NonEmptyString
        email: NonEmptyString
        address: NonEmptyString
        clientCategory: ClientCategory!
      }

      type BasicClientPassport {
        number: NonEmptyString
        issued: NonEmptyString
        code: NonEmptyString
        placeOfBirth: NonEmptyString
        registrationAddress: NonEmptyString
      }

      type BasicClientIndividualProperties {
        dob: Date
        snils: NonEmptyString
        clientPassport: BasicClientPassport
      }

      type BasicClientIndividualMinorProperties {
        dob: Date
        snils: NonEmptyString
        birthCertificate: NonEmptyString
        clientPassport: BasicClientPassport
        representatives: [BasicClient!]
      }

      type BasicClientEntityProperties {
        kpp: NonEmptyString
      }

      type Client {
        clientProperties: BasicClient!
        clientIndividualProperties: BasicClientIndividualProperties
        clientIndividualMinorProperties: BasicClientIndividualMinorProperties
        clientEntityProperties: BasicClientEntityProperties
        representatives: [BasicRepresentative!]
      }

      type Clients {
        clients: [Client!]!
        totalCount: NonNegativeInt!
      }

      input CreateClientPropertiesInput {
        fullName: NonEmptyString!
        inn: NonEmptyString
        phone: NonEmptyString
        address: NonEmptyString
        email: NonEmptyString
        clientCategory: ClientCategory!
      }

      input UpdateClientPropertiesInput {
        id: PositiveInt!
        fullName: NonEmptyString
        inn: NonEmptyString
        phone: NonEmptyString
        address: NonEmptyString
        email: NonEmptyString
      }

      input ClientPassportPropertiesInput {
        number: NonEmptyString
        issued: NonEmptyString
        code: NonEmptyString
        placeOfBirth: NonEmptyString
        registrationAddress: NonEmptyString
      }

      input ClientIndividualPropertiesInput {
        dob: Date
        snils: NonEmptyString
        clientPassport: ClientPassportPropertiesInput
      }

      input ClientIndividualMinorPropertiesInput {
        dob: Date
        snils: NonEmptyString
        birthCertificate: NonEmptyString
        clientPassport: ClientPassportPropertiesInput
        representativeIds: [PositiveInt!]
      }

      input ClientEntityPropertiesInput {
        kpp: NonEmptyString
      }

      input GetClientInput {
        id: PositiveInt!
      }

      input GetClientsInput {
        options: BasicOptionsInput
      }

      input CreateClientInput {
        clientProperties: CreateClientPropertiesInput!
        clientIndividualProperties: ClientIndividualPropertiesInput
        clientIndividualMinorProperties: ClientIndividualMinorPropertiesInput
        clientEntityProperties: ClientEntityPropertiesInput
      }

      input UpdateClientInput {
        clientProperties: UpdateClientPropertiesInput!
        clientIndividualProperties: ClientIndividualPropertiesInput
        clientIndividualMinorProperties: ClientIndividualMinorPropertiesInput
        clientEntityProperties: ClientEntityPropertiesInput
      }

      type Query {
        getClient(input: GetClientInput!): Client!
        getClients(input: GetClientsInput): Clients!
      }

      type Mutation {
        createClient(input: CreateClientInput!): BasicClient!
        createRepresentative(
          input: CreateRepresentativeInput!
        ): BasicRepresentative!
        updateClient(input: UpdateClientInput!): BasicClient!
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
      Query: {
        getClient: async (_, { input }) => {
          return this.clientService.getClient(input);
        },
        getClients: async (_, { input }) => {
          return this.clientService.getClients(input);
        },
      },
      Mutation: {
        createClient: async (_, { input }) => {
          return this.clientService.createClient(input);
        },
        updateClient: async (_, { input }) => {
          return this.clientService.updateClient(input);
        },
      },
    };
  }
}

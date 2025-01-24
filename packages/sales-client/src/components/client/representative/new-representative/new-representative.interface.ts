import { BasicRepresentative } from '@/__types__/graphql';

export interface INewRepresentative {
  clientId: number;
  onSubmit?(representative: BasicRepresentative): void;
}

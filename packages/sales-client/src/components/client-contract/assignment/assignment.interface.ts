import { BasicClientContractToClient } from '@/__types__/graphql';
import { IClientCard } from '@/components/client/client-card/client-card.interface';

export interface IAssignment {
  clientContractId: number;
  clientsFrom: Omit<IClientCard<BasicClientContractToClient>, 'onDelete'>[];
  onSubmit(): void;
}

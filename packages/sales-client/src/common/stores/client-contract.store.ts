import { create } from 'zustand';

import {
  BasicBank,
  BasicClientContractToClient,
  BasicSubsidy,
} from '@/__types__/graphql';
import { TAgencyContractCard } from '@/components/agency-contract/agency-contract-card/agency-contract-card.interface';
import { IClientCard } from '@/components/client/client-card/client-card.interface';
import { TProductCard } from '@/components/product/product-card/product-card.interface';
import { TRealEstateAgentCard } from '@/components/real-estate-agent/real-estate-agent-card/real-estate-agent-card.interface';
import { TUserPicker } from '@/components/user/user-picker/user-picker.interface';

interface IClientContract {
  clients: Omit<IClientCard<BasicClientContractToClient>, 'onDelete'>[];
  product: TProductCard | null;
  agencyContracts: TAgencyContractCard[];
  bank: BasicBank | null;
  subsidy: BasicSubsidy | null;
  manager: TUserPicker | null;
  realEstateAgent: TRealEstateAgentCard | null;
  clientContractProperties: {
    number: string;
    date: string;
    registrationDate: string;
    price: number;
    comment: string;
    clients: { clientId: number; isMain: boolean; share: number }[];
    productId: number | null;
    managerId: number | null;
    realEstateAgentId: number | null;
    bankId: number | null;
    subsidyId: number | null;
    agencyContractIds: number[];
  };
  dduClientContractProperties: {
    dduLink: string;
    escrowAccountNumber: string;
    escrowAccountOpeningDate: string;
    escrowPeriod: string;
    isEscrowDiscount: boolean;
    returnAccount: string;
  } | null;
  dkpClientContractProperties: {
    dkpLink: string;
  } | null;
}

interface IStore {
  clientContract: IClientContract | null;
  setClientContract(clientContract: IClientContract | null): void;
}

export const useClientContractStore = create<IStore>()((set) => ({
  clientContract: null,

  setClientContract: (clientContract) => set({ clientContract }),
}));

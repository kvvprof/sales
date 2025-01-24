export interface IPrintout {
  id: number;
  kind:
    | 'ActRealEstateAgency'
    | 'ContractRealEstateAgency'
    | 'BuyerAcceptanceCertificate';
  callback(): void;
}

export interface IPrintoutPayload extends Omit<IPrintout, 'callback'> {}

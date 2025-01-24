export interface INewTransferAct {
  payload: {
    clientContractId: number;
    clientIds: number[];
  };
  onSubmit(): void;
}

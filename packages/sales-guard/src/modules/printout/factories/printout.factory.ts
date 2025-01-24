import { Kinds } from '@/modules/printout/enums/kinds.enum';

export class PrintoutFactory {
  constructor(
    private readonly kind: Kinds,
    private readonly id: number,
  ) {}

  public createPayload() {
    switch (this.kind) {
      case Kinds.ActRealEstateAgency:
        return [
          {
            kind: this.kind,
            actId: this.id,
          },
        ];
      case Kinds.ContractRealEstateAgency:
        return [
          {
            kind: this.kind,
            contractId: this.id,
          },
        ];
      case Kinds.BuyerAcceptanceCertificate:
        return [
          {
            kind: this.kind,
            actId: this.id,
          },
        ];
    }
  }
}

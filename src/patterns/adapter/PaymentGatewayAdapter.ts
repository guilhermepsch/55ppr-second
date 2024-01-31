import { PaymentGateway } from "./PaymentGateway";
import { NewPaymentGateway } from "./NewPaymentGateway";
import { LegacyPaymentSystem } from "./LegacyPaymentSystem";

export class PaymentGatewayAdapter extends NewPaymentGateway implements PaymentGateway {
  constructor(private LegacyPaymentSystem: LegacyPaymentSystem) {
    super();
  }

  processPayment(amount: number): boolean {
    this.LegacyPaymentSystem.processLegacyPayment(amount);
    return super.processPayment(amount);
  }
}

import { PaymentGateway } from "./PaymentGateway";

export class NewPaymentGateway implements PaymentGateway {
  processPayment(amount: number): boolean {
    console.log(`Processing payment of $${amount} with the new payment gateway.`);
    return true;
  }
}
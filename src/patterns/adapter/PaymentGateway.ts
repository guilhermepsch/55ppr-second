export interface PaymentGateway {
  processPayment(amount: number): boolean;
}
export class LegacyPaymentSystem {
  processLegacyPayment(amount: number): boolean {
    console.log(`Processing legacy payment of $${amount}.`);
    return true;
  }
}

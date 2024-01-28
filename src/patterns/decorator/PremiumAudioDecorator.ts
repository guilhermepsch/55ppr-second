import { SubscriptionDecorator } from './SubscriptionDecorator';

export class PremiumAudioDecorator extends SubscriptionDecorator {
	public price() {
		return this.subscription.price() + 3.99;
	}

	public description() {
		return `${this.subscription.description()} + Premium Audio Quality`;
	}
}

import { ActiveState } from './ActiveState';
import { UserState } from './UserState';

export class CancelledState extends UserState {

	public viewContent() {
		console.log('Access denied. Subscription is cancelled.');
	}

	public comment() {
		console.log('Unable to post comments. Subscription is cancelled.');
	}

	public cancelSubscription() {
		console.log('Subscription is already cancelled.');
	}

  public renewSubscription(): void {
    console.log('Renewing subscription...');
    this.handleChangeState(new ActiveState(this.handleChangeState));
  }
  
  public suspendSubscription(): void {
    console.log('Subscription is already cancelled.');
  }
}

import { ActiveState } from "./ActiveState";
import { CancelledState } from "./CancelledState";
import { UserState } from "./UserState";

export class SuspendedState extends UserState {

  public viewContent() {
    console.log("Viewing content (limited)...");
  }

  public comment() {
    console.log("Unable to post comments in suspended state.");
  }

  public cancelSubscription() {
    console.log("Cancelling subscription...");
    this.handleChangeState(new CancelledState(this.handleChangeState));
  }

  public renewSubscription(): void {
    console.log("Renewing subscription...");
    this.handleChangeState(new ActiveState(this.handleChangeState));
  }

  public suspendSubscription(): void {
    console.log("Subscription is already suspended.");
  }
}

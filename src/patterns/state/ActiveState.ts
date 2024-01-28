import { CancelledState } from "./CancelledState";
import { SuspendedState } from "./SuspendedState";
import { UserState } from "./UserState";

export class ActiveState extends UserState {

  public viewContent() {
    console.log("Viewing content...");
  }

  public comment() {
    console.log("Posting comments...");
  }

  public cancelSubscription() {
    console.log("Cancelling subscription...");
    this.handleChangeState(new CancelledState(this.handleChangeState));
  }

  public renewSubscription(): void {
    console.log("Subscription is already active.");
  }
  
  public suspendSubscription(): void {
    console.log("Suspending subscription...");
    this.handleChangeState(new SuspendedState(this.handleChangeState));
  }
}

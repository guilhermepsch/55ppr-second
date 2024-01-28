export abstract class UserState {

  constructor(protected handleChangeState: (state: UserState) => void) {}

  public abstract viewContent(): void;
  public abstract comment(): void;
  public abstract cancelSubscription(): void;
  public abstract renewSubscription(): void;
  public abstract suspendSubscription(): void;
}

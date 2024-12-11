// These are used to cancel any ongoing streams when the component is unmounted.
// I wanted to keep these in one place so different components could ensure there
// were no lingering streams.
// WrappedAbortController's signal should be passed into the rpc call's options object
//
// Feel free to create more AbortControllers if you need.
class WrappedAbortController {
  controller: AbortController;

  constructor() {
    this.controller = new AbortController();
  }

  get signal() {
    return this.controller.signal;
  }

  public abort = (reason: string) => {
    this.controller.abort(reason);
    // Create a new abort controller for the next time
    // we want to start the stream
    this.controller = new AbortController();
  };
}

export const abortControllers = {
  comms: new WrappedAbortController(),
  traffic: new WrappedAbortController(),
  rssi: new WrappedAbortController(),
};

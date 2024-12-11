import { ConnectError, Interceptor, Code } from "@connectrpc/connect";
import { useGrpcConnectionStore } from "stores/GrpcConnection/GrpcConnectionStore";

export const connectionStatusMonitor: Interceptor = (next) => async (req) => {
  try {
    const connectionHasBeenMovedToDifferentClient =
      useGrpcConnectionStore.getState().connectionHasBeenMovedToDifferentClient;
    if (connectionHasBeenMovedToDifferentClient) {
      throw new Error("connection has been moved to a different client");
    }
    const res = await next(req);
    useGrpcConnectionStore.setState({ isConnected: true });
    return res;
  } catch (e) {
    const connectErr = ConnectError.from(e);
    const code = connectErr.code;
    let message = connectErr.rawMessage;
    // Interceptor on the server side wraps the error with this
    const isServerError = message.startsWith("internal server error:");
    if (isServerError) {
      message = message.replace("internal server error:", "");
      console.error(e);
      throw new Error(message);
    }
    if (code === Code.NotFound) {
      console.error("lost connection to solo");
      useGrpcConnectionStore.setState({ isConnected: false });
    }
    // This error is returned by the server when a different
    // connection has been established
    if (code === Code.Unauthenticated) {
      console.error("connection has been moved to a different client");
      useGrpcConnectionStore.setState({
        connectionHasBeenMovedToDifferentClient: true,
      });
    }
    if (code === Code.Unknown) {
      // Could be anything, but if it's fetch-related
      // then it's likely there's a connection problem.
      // This check is a little hacky, but I'm relying on Connect
      // to produce the same error text when a network call fails
      // across different browsers.
      // I wish Connect had a code better than 'Unknown' for this!
      // If you have a better idea, please implement it :)
      const eString = `${connectErr}`;
      if (eString.includes("fetch") || eString.includes("Fetch")) {
        console.error("lost connection to solo");
        useGrpcConnectionStore.setState({ isConnected: false });
      }
    }
    console.log("throwing error not caught", e);
    throw e;
  }
};

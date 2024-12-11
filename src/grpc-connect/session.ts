import { Interceptor } from "@connectrpc/connect";

const uuid = () => {
  var temp_url = URL.createObjectURL(new Blob());
  var uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.substring(uuid.lastIndexOf("/") + 1); // remove prefix (e.g. blob:null/, blob:www.test.com/, ...)
};

const sessionId = uuid();
console.log("using session id", sessionId);

export const session: Interceptor = (next) => async (req) => {
  try {
    req.header.set("session-id", sessionId);
    return await next(req);
  } catch (e) {
    throw e;
  }
};

import { Interceptor } from "@connectrpc/connect";

export const requestLogger: Interceptor = (next) => async (req) => {
  try {
    if (req.service.typeName === "radio.RadioService") {
      if (req.method.name === "SetFixedFrequency") {
        console.log("setting fixed radio frequency", req.message);
      } else if (req.method.name === "StartFrequencyHop") {
        console.log("starting radio custom frequency hop", req.message);
      } else if (req.method.name === "StartHopOnBands") {
        console.log("starting radio hop on bands", req.message);
      } else if (req.method.name === "SetHopFrequencies") {
        console.log("setting radio hop frequencies", req.message);
      }
    }
    return await next(req);
  } catch (e) {
    throw e;
  }
};

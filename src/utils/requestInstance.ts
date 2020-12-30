import Request from "./request";
import { RequestProxyType } from "./request/index.type";
import { AxiosRequestConfig } from "axios";

interface ConType {
  new (config: AxiosRequestConfig): RequestProxyType;
}

function createInstance(Con: ConType): RequestProxyType {
  return new Con({
    baseURL: process.env.VUE_APP_REQUEST_URL
  });
}

const request: RequestProxyType = createInstance(
  (Request as unknown) as ConType
);
export default request;

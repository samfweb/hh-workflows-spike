// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file services/wifi/wifi.proto (package wifi, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { EmptySchema } from "../../base/empty_pb";
import { file_base_empty } from "../../base/empty_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file services/wifi/wifi.proto.
 */
export const file_services_wifi_wifi: GenFile = /*@__PURE__*/
  fileDesc("ChhzZXJ2aWNlcy93aWZpL3dpZmkucHJvdG8SBHdpZmkiOQoXQ29ubmVjdFRvTmV0d29ya1JlcXVlc3QSDAoEc3NpZBgBIAEoCRIQCghwYXNzd29yZBgCIAEoCSIoChVDb25uZWN0VG9OZXR3b3JrUmVwbHkSDwoHc3VjY2VzcxgBIAEoCCIkChRGb3JnZXROZXR3b3JrUmVxdWVzdBIMCgRzc2lkGAEgASgJIigKE0dldElzQ29ubmVjdGVkUmVwbHkSEQoJY29ubmVjdGVkGAEgASgIInoKC1dpZmlOZXR3b3JrEg0KBWluVXNlGAEgASgIEg0KBWJzc2lkGAIgASgJEgwKBHNzaWQYAyABKAkSDwoHY2hhbm5lbBgEIAEoDRIMCgRyYXRlGAUgASgJEg4KBnNpZ25hbBgGIAEoBRIQCghzZWN1cml0eRgHIAEoCSI3Ch9HZXRBdmFpbGFibGVXaWZpTmV0d29ya3NSZXF1ZXN0EhQKDHNob3VsZFJlc2NhbhgBIAEoCCJECh1HZXRBdmFpbGFibGVXaWZpTmV0d29ya3NSZXBseRIjCghuZXR3b3JrcxgBIAMoCzIRLndpZmkuV2lmaU5ldHdvcmsiMgoeR2V0UmVtZW1iZXJlZFdpZmlOZXR3b3Jrc1JlcGx5EhAKCG5ldHdvcmtzGAEgAygJIjwKFkdldEN1cnJlbnROZXR3b3JrUmVwbHkSIgoHbmV0d29yaxgBIAEoCzIRLndpZmkuV2lmaU5ldHdvcmsyjQQKEldpZmlOZXR3b3JrU2VydmljZRJQChBDb25uZWN0VG9OZXR3b3JrEh0ud2lmaS5Db25uZWN0VG9OZXR3b3JrUmVxdWVzdBobLndpZmkuQ29ubmVjdFRvTmV0d29ya1JlcGx5IgASOgoNRm9yZ2V0TmV0d29yaxIaLndpZmkuRm9yZ2V0TmV0d29ya1JlcXVlc3QaCy5iYXNlLkVtcHR5IgASLwoRRm9yZ2V0QWxsTmV0d29ya3MSCy5iYXNlLkVtcHR5GgsuYmFzZS5FbXB0eSIAEjoKDkdldElzQ29ubmVjdGVkEgsuYmFzZS5FbXB0eRoZLndpZmkuR2V0SXNDb25uZWN0ZWRSZXBseSIAEmgKGEdldEF2YWlsYWJsZVdpZmlOZXR3b3JrcxIlLndpZmkuR2V0QXZhaWxhYmxlV2lmaU5ldHdvcmtzUmVxdWVzdBojLndpZmkuR2V0QXZhaWxhYmxlV2lmaU5ldHdvcmtzUmVwbHkiABJQChlHZXRSZW1lbWJlcmVkV2lmaU5ldHdvcmtzEgsuYmFzZS5FbXB0eRokLndpZmkuR2V0UmVtZW1iZXJlZFdpZmlOZXR3b3Jrc1JlcGx5IgASQAoRR2V0Q3VycmVudE5ldHdvcmsSCy5iYXNlLkVtcHR5Ghwud2lmaS5HZXRDdXJyZW50TmV0d29ya1JlcGx5IgBCpgEKCGNvbS53aWZpQglXaWZpUHJvdG9QAVpfZ2l0aHViLmNvbS9oYWNraHVudGVyZGV2L3BpLXNlbnNvcnMvcHVyc3VpdC1hbmQtc29sby9wcm90by1kZWZpbml0aW9ucy9fZ2VuZXJhdGVkL3NlcnZpY2VzL3dpZmmiAgNXWFiqAgRXaWZpygIEV2lmaeICEFdpZmlcR1BCTWV0YWRhdGHqAgRXaWZpYgZwcm90bzM", [file_base_empty]);

/**
 * @generated from message wifi.ConnectToNetworkRequest
 */
export type ConnectToNetworkRequest = Message<"wifi.ConnectToNetworkRequest"> & {
  /**
   * @generated from field: string ssid = 1;
   */
  ssid: string;

  /**
   * @generated from field: string password = 2;
   */
  password: string;
};

/**
 * Describes the message wifi.ConnectToNetworkRequest.
 * Use `create(ConnectToNetworkRequestSchema)` to create a new message.
 */
export const ConnectToNetworkRequestSchema: GenMessage<ConnectToNetworkRequest> = /*@__PURE__*/
  messageDesc(file_services_wifi_wifi, 0);

/**
 * @generated from message wifi.ConnectToNetworkReply
 */
export type ConnectToNetworkReply = Message<"wifi.ConnectToNetworkReply"> & {
  /**
   * @generated from field: bool success = 1;
   */
  success: boolean;
};

/**
 * Describes the message wifi.ConnectToNetworkReply.
 * Use `create(ConnectToNetworkReplySchema)` to create a new message.
 */
export const ConnectToNetworkReplySchema: GenMessage<ConnectToNetworkReply> = /*@__PURE__*/
  messageDesc(file_services_wifi_wifi, 1);

/**
 * @generated from message wifi.ForgetNetworkRequest
 */
export type ForgetNetworkRequest = Message<"wifi.ForgetNetworkRequest"> & {
  /**
   * @generated from field: string ssid = 1;
   */
  ssid: string;
};

/**
 * Describes the message wifi.ForgetNetworkRequest.
 * Use `create(ForgetNetworkRequestSchema)` to create a new message.
 */
export const ForgetNetworkRequestSchema: GenMessage<ForgetNetworkRequest> = /*@__PURE__*/
  messageDesc(file_services_wifi_wifi, 2);

/**
 * @generated from message wifi.GetIsConnectedReply
 */
export type GetIsConnectedReply = Message<"wifi.GetIsConnectedReply"> & {
  /**
   * @generated from field: bool connected = 1;
   */
  connected: boolean;
};

/**
 * Describes the message wifi.GetIsConnectedReply.
 * Use `create(GetIsConnectedReplySchema)` to create a new message.
 */
export const GetIsConnectedReplySchema: GenMessage<GetIsConnectedReply> = /*@__PURE__*/
  messageDesc(file_services_wifi_wifi, 3);

/**
 * @generated from message wifi.WifiNetwork
 */
export type WifiNetwork = Message<"wifi.WifiNetwork"> & {
  /**
   * @generated from field: bool inUse = 1;
   */
  inUse: boolean;

  /**
   * @generated from field: string bssid = 2;
   */
  bssid: string;

  /**
   * @generated from field: string ssid = 3;
   */
  ssid: string;

  /**
   * @generated from field: uint32 channel = 4;
   */
  channel: number;

  /**
   * @generated from field: string rate = 5;
   */
  rate: string;

  /**
   * @generated from field: int32 signal = 6;
   */
  signal: number;

  /**
   * @generated from field: string security = 7;
   */
  security: string;
};

/**
 * Describes the message wifi.WifiNetwork.
 * Use `create(WifiNetworkSchema)` to create a new message.
 */
export const WifiNetworkSchema: GenMessage<WifiNetwork> = /*@__PURE__*/
  messageDesc(file_services_wifi_wifi, 4);

/**
 * @generated from message wifi.GetAvailableWifiNetworksRequest
 */
export type GetAvailableWifiNetworksRequest = Message<"wifi.GetAvailableWifiNetworksRequest"> & {
  /**
   * @generated from field: bool shouldRescan = 1;
   */
  shouldRescan: boolean;
};

/**
 * Describes the message wifi.GetAvailableWifiNetworksRequest.
 * Use `create(GetAvailableWifiNetworksRequestSchema)` to create a new message.
 */
export const GetAvailableWifiNetworksRequestSchema: GenMessage<GetAvailableWifiNetworksRequest> = /*@__PURE__*/
  messageDesc(file_services_wifi_wifi, 5);

/**
 * @generated from message wifi.GetAvailableWifiNetworksReply
 */
export type GetAvailableWifiNetworksReply = Message<"wifi.GetAvailableWifiNetworksReply"> & {
  /**
   * @generated from field: repeated wifi.WifiNetwork networks = 1;
   */
  networks: WifiNetwork[];
};

/**
 * Describes the message wifi.GetAvailableWifiNetworksReply.
 * Use `create(GetAvailableWifiNetworksReplySchema)` to create a new message.
 */
export const GetAvailableWifiNetworksReplySchema: GenMessage<GetAvailableWifiNetworksReply> = /*@__PURE__*/
  messageDesc(file_services_wifi_wifi, 6);

/**
 * @generated from message wifi.GetRememberedWifiNetworksReply
 */
export type GetRememberedWifiNetworksReply = Message<"wifi.GetRememberedWifiNetworksReply"> & {
  /**
   * @generated from field: repeated string networks = 1;
   */
  networks: string[];
};

/**
 * Describes the message wifi.GetRememberedWifiNetworksReply.
 * Use `create(GetRememberedWifiNetworksReplySchema)` to create a new message.
 */
export const GetRememberedWifiNetworksReplySchema: GenMessage<GetRememberedWifiNetworksReply> = /*@__PURE__*/
  messageDesc(file_services_wifi_wifi, 7);

/**
 * @generated from message wifi.GetCurrentNetworkReply
 */
export type GetCurrentNetworkReply = Message<"wifi.GetCurrentNetworkReply"> & {
  /**
   * @generated from field: wifi.WifiNetwork network = 1;
   */
  network?: WifiNetwork;
};

/**
 * Describes the message wifi.GetCurrentNetworkReply.
 * Use `create(GetCurrentNetworkReplySchema)` to create a new message.
 */
export const GetCurrentNetworkReplySchema: GenMessage<GetCurrentNetworkReply> = /*@__PURE__*/
  messageDesc(file_services_wifi_wifi, 8);

/**
 * @generated from service wifi.WifiNetworkService
 */
export const WifiNetworkService: GenService<{
  /**
   * @generated from rpc wifi.WifiNetworkService.ConnectToNetwork
   */
  connectToNetwork: {
    methodKind: "unary";
    input: typeof ConnectToNetworkRequestSchema;
    output: typeof ConnectToNetworkReplySchema;
  },
  /**
   * @generated from rpc wifi.WifiNetworkService.ForgetNetwork
   */
  forgetNetwork: {
    methodKind: "unary";
    input: typeof ForgetNetworkRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * @generated from rpc wifi.WifiNetworkService.ForgetAllNetworks
   */
  forgetAllNetworks: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof EmptySchema;
  },
  /**
   * @generated from rpc wifi.WifiNetworkService.GetIsConnected
   */
  getIsConnected: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof GetIsConnectedReplySchema;
  },
  /**
   * @generated from rpc wifi.WifiNetworkService.GetAvailableWifiNetworks
   */
  getAvailableWifiNetworks: {
    methodKind: "unary";
    input: typeof GetAvailableWifiNetworksRequestSchema;
    output: typeof GetAvailableWifiNetworksReplySchema;
  },
  /**
   * @generated from rpc wifi.WifiNetworkService.GetRememberedWifiNetworks
   */
  getRememberedWifiNetworks: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof GetRememberedWifiNetworksReplySchema;
  },
  /**
   * @generated from rpc wifi.WifiNetworkService.GetCurrentNetwork
   */
  getCurrentNetwork: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof GetCurrentNetworkReplySchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_services_wifi_wifi, 0);


// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file services/seen-ssids/ssids.proto (package seen_ssids, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { EmptySchema } from "../../base/empty_pb";
import { file_base_empty } from "../../base/empty_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file services/seen-ssids/ssids.proto.
 */
export const file_services_seen_ssids_ssids: GenFile = /*@__PURE__*/
  fileDesc("Ch9zZXJ2aWNlcy9zZWVuLXNzaWRzL3NzaWRzLnByb3RvEgpzZWVuX3NzaWRzIiIKEUdldFNlZW5Tc2lkc1JlcGx5Eg0KBXNzaWRzGAEgAygJMlAKEFNlZW5Tc2lkc1NlcnZpY2USPAoMR2V0U2VlblNzaWRzEgsuYmFzZS5FbXB0eRodLnNlZW5fc3NpZHMuR2V0U2VlblNzaWRzUmVwbHkiAELHAQoOY29tLnNlZW5fc3NpZHNCClNzaWRzUHJvdG9QAVplZ2l0aHViLmNvbS9oYWNraHVudGVyZGV2L3BpLXNlbnNvcnMvcHVyc3VpdC1hbmQtc29sby9wcm90by1kZWZpbml0aW9ucy9fZ2VuZXJhdGVkL3NlcnZpY2VzL3NlZW4tc3NpZHOiAgNTWFiqAglTZWVuU3NpZHPKAglTZWVuU3NpZHPiAhVTZWVuU3NpZHNcR1BCTWV0YWRhdGHqAglTZWVuU3NpZHNiBnByb3RvMw", [file_base_empty]);

/**
 * @generated from message seen_ssids.GetSeenSsidsReply
 */
export type GetSeenSsidsReply = Message<"seen_ssids.GetSeenSsidsReply"> & {
  /**
   * @generated from field: repeated string ssids = 1;
   */
  ssids: string[];
};

/**
 * Describes the message seen_ssids.GetSeenSsidsReply.
 * Use `create(GetSeenSsidsReplySchema)` to create a new message.
 */
export const GetSeenSsidsReplySchema: GenMessage<GetSeenSsidsReply> = /*@__PURE__*/
  messageDesc(file_services_seen_ssids_ssids, 0);

/**
 * @generated from service seen_ssids.SeenSsidsService
 */
export const SeenSsidsService: GenService<{
  /**
   * @generated from rpc seen_ssids.SeenSsidsService.GetSeenSsids
   */
  getSeenSsids: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof GetSeenSsidsReplySchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_services_seen_ssids_ssids, 0);


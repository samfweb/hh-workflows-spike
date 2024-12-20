// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file services/update/update.proto (package update, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { EmptySchema } from "../../base/empty_pb";
import { file_base_empty } from "../../base/empty_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file services/update/update.proto.
 */
export const file_services_update_update: GenFile = /*@__PURE__*/
  fileDesc("ChxzZXJ2aWNlcy91cGRhdGUvdXBkYXRlLnByb3RvEgZ1cGRhdGUiMAoWR2V0Q3VycmVudFZlcnNpb25SZXBseRIWCg5jdXJyZW50VmVyc2lvbhgBIAEoCSI0ChhHZXRBdmFpbGFibGVWZXJzaW9uUmVwbHkSGAoQYXZhaWxhYmxlVmVyc2lvbhgBIAEoCTLGAQoNVXBkYXRlU2VydmljZRJCChFHZXRDdXJyZW50VmVyc2lvbhILLmJhc2UuRW1wdHkaHi51cGRhdGUuR2V0Q3VycmVudFZlcnNpb25SZXBseSIAEkYKE0dldEF2YWlsYWJsZVZlcnNpb24SCy5iYXNlLkVtcHR5GiAudXBkYXRlLkdldEF2YWlsYWJsZVZlcnNpb25SZXBseSIAEikKC1N0YXJ0VXBkYXRlEgsuYmFzZS5FbXB0eRoLLmJhc2UuRW1wdHkiAEK0AQoKY29tLnVwZGF0ZUILVXBkYXRlUHJvdG9QAVphZ2l0aHViLmNvbS9oYWNraHVudGVyZGV2L3BpLXNlbnNvcnMvcHVyc3VpdC1hbmQtc29sby9wcm90by1kZWZpbml0aW9ucy9fZ2VuZXJhdGVkL3NlcnZpY2VzL3VwZGF0ZaICA1VYWKoCBlVwZGF0ZcoCBlVwZGF0ZeICElVwZGF0ZVxHUEJNZXRhZGF0YeoCBlVwZGF0ZWIGcHJvdG8z", [file_base_empty]);

/**
 * @generated from message update.GetCurrentVersionReply
 */
export type GetCurrentVersionReply = Message<"update.GetCurrentVersionReply"> & {
  /**
   * @generated from field: string currentVersion = 1;
   */
  currentVersion: string;
};

/**
 * Describes the message update.GetCurrentVersionReply.
 * Use `create(GetCurrentVersionReplySchema)` to create a new message.
 */
export const GetCurrentVersionReplySchema: GenMessage<GetCurrentVersionReply> = /*@__PURE__*/
  messageDesc(file_services_update_update, 0);

/**
 * @generated from message update.GetAvailableVersionReply
 */
export type GetAvailableVersionReply = Message<"update.GetAvailableVersionReply"> & {
  /**
   * @generated from field: string availableVersion = 1;
   */
  availableVersion: string;
};

/**
 * Describes the message update.GetAvailableVersionReply.
 * Use `create(GetAvailableVersionReplySchema)` to create a new message.
 */
export const GetAvailableVersionReplySchema: GenMessage<GetAvailableVersionReply> = /*@__PURE__*/
  messageDesc(file_services_update_update, 1);

/**
 * @generated from service update.UpdateService
 */
export const UpdateService: GenService<{
  /**
   * @generated from rpc update.UpdateService.GetCurrentVersion
   */
  getCurrentVersion: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof GetCurrentVersionReplySchema;
  },
  /**
   * @generated from rpc update.UpdateService.GetAvailableVersion
   */
  getAvailableVersion: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof GetAvailableVersionReplySchema;
  },
  /**
   * @generated from rpc update.UpdateService.StartUpdate
   */
  startUpdate: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof EmptySchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_services_update_update, 0);


// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file services/pcap/logs.proto (package pcap, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { EmptySchema } from "../../base/empty_pb";
import { file_base_empty } from "../../base/empty_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file services/pcap/logs.proto.
 */
export const file_services_pcap_logs: GenFile = /*@__PURE__*/
  fileDesc("ChhzZXJ2aWNlcy9wY2FwL2xvZ3MucHJvdG8SBHBjYXAiLwoMR2V0TG9nc1JlcGx5Eh8KBGxvZ3MYASADKAsyES5wY2FwLlBjYXBMb2dGaWxlIlMKC1BjYXBMb2dGaWxlEhAKCGZpbGVOYW1lGAEgASgJEhAKCGZpbGVUeXBlGAIgASgJEhMKC3NpemVJbkJ5dGVzGAMgASgEEgsKA3RhZxgEIAEoCSIfCg9HZXRMb2dUYWdzUmVwbHkSDAoEdGFncxgBIAMoCSIiChBTZXRMb2dUYWdSZXF1ZXN0Eg4KBm5ld1RhZxgBIAEoCSKHAQoRQ3VycmVudExvZ0RldGFpbHMSFgoOY3VycmVudExvZ05hbWUYAiABKAkSFQoNY3VycmVudExvZ1RhZxgDIAEoCRITCgtzaXplSW5CeXRlcxgEIAEoBBIcChRsYXN0U3VjY2Vzc2Z1bFVwbG9hZBgFIAEoBBIQCghpc1BhdXNlZBgGIAEoCCI7ChlUcmFuc2l0aW9uVG9OZXdMb2dSZXF1ZXN0EhMKBm5ld1RhZxgBIAEoCUgAiAEBQgkKB19uZXdUYWciTQoXVHJhbnNpdGlvblRvTmV3TG9nUmVwbHkSMgoRY3VycmVudExvZ0RldGFpbHMYASABKAsyFy5wY2FwLkN1cnJlbnRMb2dEZXRhaWxzMqwECg5QY2FwTG9nU2VydmljZRIsCgdHZXRMb2dzEgsuYmFzZS5FbXB0eRoSLnBjYXAuR2V0TG9nc1JlcGx5IgASPgoUR2V0Q3VycmVudExvZ0RldGFpbHMSCy5iYXNlLkVtcHR5GhcucGNhcC5DdXJyZW50TG9nRGV0YWlscyIAEjIKCkdldExvZ1RhZ3MSCy5iYXNlLkVtcHR5GhUucGNhcC5HZXRMb2dUYWdzUmVwbHkiABIyCglTZXRMb2dUYWcSFi5wY2FwLlNldExvZ1RhZ1JlcXVlc3QaCy5iYXNlLkVtcHR5IgASLgoQRGVsZXRlQWxsTG9nVGFncxILLmJhc2UuRW1wdHkaCy5iYXNlLkVtcHR5IgASKgoMUGF1c2VMb2dnaW5nEgsuYmFzZS5FbXB0eRoLLmJhc2UuRW1wdHkiABIrCg1SZXN1bWVMb2dnaW5nEgsuYmFzZS5FbXB0eRoLLmJhc2UuRW1wdHkiABJEChJUcmFuc2l0aW9uVG9OZXdMb2cSHy5wY2FwLlRyYW5zaXRpb25Ub05ld0xvZ1JlcXVlc3QaCy5iYXNlLkVtcHR5IgASNAoKVXBsb2FkTG9ncxILLmJhc2UuRW1wdHkaFy5wY2FwLkN1cnJlbnRMb2dEZXRhaWxzIgASPwoVRGVsZXRlQWxsTG9nc0Zyb21EaXNrEgsuYmFzZS5FbXB0eRoXLnBjYXAuQ3VycmVudExvZ0RldGFpbHMiAEKmAQoIY29tLnBjYXBCCUxvZ3NQcm90b1ABWl9naXRodWIuY29tL2hhY2todW50ZXJkZXYvcGktc2Vuc29ycy9wdXJzdWl0LWFuZC1zb2xvL3Byb3RvLWRlZmluaXRpb25zL19nZW5lcmF0ZWQvc2VydmljZXMvcGNhcKICA1BYWKoCBFBjYXDKAgRQY2Fw4gIQUGNhcFxHUEJNZXRhZGF0YeoCBFBjYXBiBnByb3RvMw", [file_base_empty]);

/**
 * @generated from message pcap.GetLogsReply
 */
export type GetLogsReply = Message<"pcap.GetLogsReply"> & {
  /**
   * @generated from field: repeated pcap.PcapLogFile logs = 1;
   */
  logs: PcapLogFile[];
};

/**
 * Describes the message pcap.GetLogsReply.
 * Use `create(GetLogsReplySchema)` to create a new message.
 */
export const GetLogsReplySchema: GenMessage<GetLogsReply> = /*@__PURE__*/
  messageDesc(file_services_pcap_logs, 0);

/**
 * @generated from message pcap.PcapLogFile
 */
export type PcapLogFile = Message<"pcap.PcapLogFile"> & {
  /**
   * @generated from field: string fileName = 1;
   */
  fileName: string;

  /**
   * @generated from field: string fileType = 2;
   */
  fileType: string;

  /**
   * @generated from field: uint64 sizeInBytes = 3;
   */
  sizeInBytes: bigint;

  /**
   * @generated from field: string tag = 4;
   */
  tag: string;
};

/**
 * Describes the message pcap.PcapLogFile.
 * Use `create(PcapLogFileSchema)` to create a new message.
 */
export const PcapLogFileSchema: GenMessage<PcapLogFile> = /*@__PURE__*/
  messageDesc(file_services_pcap_logs, 1);

/**
 * @generated from message pcap.GetLogTagsReply
 */
export type GetLogTagsReply = Message<"pcap.GetLogTagsReply"> & {
  /**
   * @generated from field: repeated string tags = 1;
   */
  tags: string[];
};

/**
 * Describes the message pcap.GetLogTagsReply.
 * Use `create(GetLogTagsReplySchema)` to create a new message.
 */
export const GetLogTagsReplySchema: GenMessage<GetLogTagsReply> = /*@__PURE__*/
  messageDesc(file_services_pcap_logs, 2);

/**
 * @generated from message pcap.SetLogTagRequest
 */
export type SetLogTagRequest = Message<"pcap.SetLogTagRequest"> & {
  /**
   * @generated from field: string newTag = 1;
   */
  newTag: string;
};

/**
 * Describes the message pcap.SetLogTagRequest.
 * Use `create(SetLogTagRequestSchema)` to create a new message.
 */
export const SetLogTagRequestSchema: GenMessage<SetLogTagRequest> = /*@__PURE__*/
  messageDesc(file_services_pcap_logs, 3);

/**
 * @generated from message pcap.CurrentLogDetails
 */
export type CurrentLogDetails = Message<"pcap.CurrentLogDetails"> & {
  /**
   * @generated from field: string currentLogName = 2;
   */
  currentLogName: string;

  /**
   * @generated from field: string currentLogTag = 3;
   */
  currentLogTag: string;

  /**
   * @generated from field: uint64 sizeInBytes = 4;
   */
  sizeInBytes: bigint;

  /**
   * @generated from field: uint64 lastSuccessfulUpload = 5;
   */
  lastSuccessfulUpload: bigint;

  /**
   * @generated from field: bool isPaused = 6;
   */
  isPaused: boolean;
};

/**
 * Describes the message pcap.CurrentLogDetails.
 * Use `create(CurrentLogDetailsSchema)` to create a new message.
 */
export const CurrentLogDetailsSchema: GenMessage<CurrentLogDetails> = /*@__PURE__*/
  messageDesc(file_services_pcap_logs, 4);

/**
 * @generated from message pcap.TransitionToNewLogRequest
 */
export type TransitionToNewLogRequest = Message<"pcap.TransitionToNewLogRequest"> & {
  /**
   * @generated from field: optional string newTag = 1;
   */
  newTag?: string;
};

/**
 * Describes the message pcap.TransitionToNewLogRequest.
 * Use `create(TransitionToNewLogRequestSchema)` to create a new message.
 */
export const TransitionToNewLogRequestSchema: GenMessage<TransitionToNewLogRequest> = /*@__PURE__*/
  messageDesc(file_services_pcap_logs, 5);

/**
 * @generated from message pcap.TransitionToNewLogReply
 */
export type TransitionToNewLogReply = Message<"pcap.TransitionToNewLogReply"> & {
  /**
   * @generated from field: pcap.CurrentLogDetails currentLogDetails = 1;
   */
  currentLogDetails?: CurrentLogDetails;
};

/**
 * Describes the message pcap.TransitionToNewLogReply.
 * Use `create(TransitionToNewLogReplySchema)` to create a new message.
 */
export const TransitionToNewLogReplySchema: GenMessage<TransitionToNewLogReply> = /*@__PURE__*/
  messageDesc(file_services_pcap_logs, 6);

/**
 * @generated from service pcap.PcapLogService
 */
export const PcapLogService: GenService<{
  /**
   * @generated from rpc pcap.PcapLogService.GetLogs
   */
  getLogs: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof GetLogsReplySchema;
  },
  /**
   * @generated from rpc pcap.PcapLogService.GetCurrentLogDetails
   */
  getCurrentLogDetails: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof CurrentLogDetailsSchema;
  },
  /**
   * @generated from rpc pcap.PcapLogService.GetLogTags
   */
  getLogTags: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof GetLogTagsReplySchema;
  },
  /**
   * @generated from rpc pcap.PcapLogService.SetLogTag
   */
  setLogTag: {
    methodKind: "unary";
    input: typeof SetLogTagRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * @generated from rpc pcap.PcapLogService.DeleteAllLogTags
   */
  deleteAllLogTags: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof EmptySchema;
  },
  /**
   * @generated from rpc pcap.PcapLogService.PauseLogging
   */
  pauseLogging: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof EmptySchema;
  },
  /**
   * @generated from rpc pcap.PcapLogService.ResumeLogging
   */
  resumeLogging: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof EmptySchema;
  },
  /**
   * @generated from rpc pcap.PcapLogService.TransitionToNewLog
   */
  transitionToNewLog: {
    methodKind: "unary";
    input: typeof TransitionToNewLogRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * @generated from rpc pcap.PcapLogService.UploadLogs
   */
  uploadLogs: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof CurrentLogDetailsSchema;
  },
  /**
   * @generated from rpc pcap.PcapLogService.DeleteAllLogsFromDisk
   */
  deleteAllLogsFromDisk: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof CurrentLogDetailsSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_services_pcap_logs, 0);


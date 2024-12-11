// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file services/isr/search.proto (package isr, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { EmptySchema } from "../../base/empty_pb";
import { file_base_empty } from "../../base/empty_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file services/isr/search.proto.
 */
export const file_services_isr_search: GenFile = /*@__PURE__*/
  fileDesc("ChlzZXJ2aWNlcy9pc3Ivc2VhcmNoLnByb3RvEgNpc3IiVgocR2V0Q3VycmVudFNlYXJjaERldGFpbHNSZXBseRITCgtpc1NlYXJjaGluZxgBIAEoCBIQCghpc0FjdGl2ZRgCIAEoCBIPCgdncm91cElkGAMgASgJIk8KEElzclNlYXJjaE9wdGlvbnMSDwoHZ3JvdXBJZBgBIAEoCRIQCghpc0FjdGl2ZRgCIAEoCBIYChBuZXR3b3Jrc1RvRGVhdXRoGAMgAygJMqACChBJc3JTZWFyY2hTZXJ2aWNlEjMKC1N0YXJ0U2VhcmNoEhUuaXNyLklzclNlYXJjaE9wdGlvbnMaCy5iYXNlLkVtcHR5IgASLgoQTWFrZVNlYXJjaEFjdGl2ZRILLmJhc2UuRW1wdHkaCy5iYXNlLkVtcHR5IgASMAoSTWFrZVNlYXJjaEluYWN0aXZlEgsuYmFzZS5FbXB0eRoLLmJhc2UuRW1wdHkiABIoCgpTdG9wU2VhcmNoEgsuYmFzZS5FbXB0eRoLLmJhc2UuRW1wdHkiABJLChdHZXRDdXJyZW50U2VhcmNoRGV0YWlscxILLmJhc2UuRW1wdHkaIS5pc3IuR2V0Q3VycmVudFNlYXJjaERldGFpbHNSZXBseSIAQqIBCgdjb20uaXNyQgtTZWFyY2hQcm90b1ABWl5naXRodWIuY29tL2hhY2todW50ZXJkZXYvcGktc2Vuc29ycy9wdXJzdWl0LWFuZC1zb2xvL3Byb3RvLWRlZmluaXRpb25zL19nZW5lcmF0ZWQvc2VydmljZXMvaXNyogIDSVhYqgIDSXNyygIDSXNy4gIPSXNyXEdQQk1ldGFkYXRh6gIDSXNyYgZwcm90bzM", [file_base_empty]);

/**
 * @generated from message isr.GetCurrentSearchDetailsReply
 */
export type GetCurrentSearchDetailsReply = Message<"isr.GetCurrentSearchDetailsReply"> & {
  /**
   * @generated from field: bool isSearching = 1;
   */
  isSearching: boolean;

  /**
   * @generated from field: bool isActive = 2;
   */
  isActive: boolean;

  /**
   * @generated from field: string groupId = 3;
   */
  groupId: string;
};

/**
 * Describes the message isr.GetCurrentSearchDetailsReply.
 * Use `create(GetCurrentSearchDetailsReplySchema)` to create a new message.
 */
export const GetCurrentSearchDetailsReplySchema: GenMessage<GetCurrentSearchDetailsReply> = /*@__PURE__*/
  messageDesc(file_services_isr_search, 0);

/**
 * @generated from message isr.IsrSearchOptions
 */
export type IsrSearchOptions = Message<"isr.IsrSearchOptions"> & {
  /**
   * @generated from field: string groupId = 1;
   */
  groupId: string;

  /**
   * @generated from field: bool isActive = 2;
   */
  isActive: boolean;

  /**
   * @generated from field: repeated string networksToDeauth = 3;
   */
  networksToDeauth: string[];
};

/**
 * Describes the message isr.IsrSearchOptions.
 * Use `create(IsrSearchOptionsSchema)` to create a new message.
 */
export const IsrSearchOptionsSchema: GenMessage<IsrSearchOptions> = /*@__PURE__*/
  messageDesc(file_services_isr_search, 1);

/**
 * @generated from service isr.IsrSearchService
 */
export const IsrSearchService: GenService<{
  /**
   * @generated from rpc isr.IsrSearchService.StartSearch
   */
  startSearch: {
    methodKind: "unary";
    input: typeof IsrSearchOptionsSchema;
    output: typeof EmptySchema;
  },
  /**
   * @generated from rpc isr.IsrSearchService.MakeSearchActive
   */
  makeSearchActive: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof EmptySchema;
  },
  /**
   * @generated from rpc isr.IsrSearchService.MakeSearchInactive
   */
  makeSearchInactive: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof EmptySchema;
  },
  /**
   * @generated from rpc isr.IsrSearchService.StopSearch
   */
  stopSearch: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof EmptySchema;
  },
  /**
   * @generated from rpc isr.IsrSearchService.GetCurrentSearchDetails
   */
  getCurrentSearchDetails: {
    methodKind: "unary";
    input: typeof EmptySchema;
    output: typeof GetCurrentSearchDetailsReplySchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_services_isr_search, 0);


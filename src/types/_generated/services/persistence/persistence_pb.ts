// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file services/persistence/persistence.proto (package persistence, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { EmptySchema } from "../../base/empty_pb";
import { file_base_empty } from "../../base/empty_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file services/persistence/persistence.proto.
 */
export const file_services_persistence_persistence: GenFile = /*@__PURE__*/
  fileDesc("CiZzZXJ2aWNlcy9wZXJzaXN0ZW5jZS9wZXJzaXN0ZW5jZS5wcm90bxILcGVyc2lzdGVuY2UiKwocUmV0cmlldmVQZXJzaXN0ZWREYXRhUmVxdWVzdBILCgNrZXkYASABKAkiTAoaUmV0cmlldmVQZXJzaXN0ZWREYXRhUmVwbHkSEgoKZGF0YUV4aXN0cxgBIAEoCBIRCgRkYXRhGAIgASgJSACIAQFCBwoFX2RhdGEiLwoSUGVyc2lzdERhdGFSZXF1ZXN0EgsKA2tleRgBIAEoCRIMCgRkYXRhGAIgASgJIjQKJFJldHJpZXZlTXVsdGlwbGVQZXJzaXN0ZWREYXRhUmVxdWVzdBIMCgRrZXlzGAEgAygJIpoBCiJSZXRyaWV2ZU11bHRpcGxlUGVyc2lzdGVkRGF0YVJlcGx5EkcKBGRhdGEYASADKAsyOS5wZXJzaXN0ZW5jZS5SZXRyaWV2ZU11bHRpcGxlUGVyc2lzdGVkRGF0YVJlcGx5LkRhdGFFbnRyeRorCglEYXRhRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ATLKAgoSUGVyc2lzdGVuY2VTZXJ2aWNlEm0KFVJldHJpZXZlUGVyc2lzdGVkRGF0YRIpLnBlcnNpc3RlbmNlLlJldHJpZXZlUGVyc2lzdGVkRGF0YVJlcXVlc3QaJy5wZXJzaXN0ZW5jZS5SZXRyaWV2ZVBlcnNpc3RlZERhdGFSZXBseSIAEj0KC1BlcnNpc3REYXRhEh8ucGVyc2lzdGVuY2UuUGVyc2lzdERhdGFSZXF1ZXN0GgsuYmFzZS5FbXB0eSIAEoUBCh1SZXRyaWV2ZU11bHRpcGxlUGVyc2lzdGVkRGF0YRIxLnBlcnNpc3RlbmNlLlJldHJpZXZlTXVsdGlwbGVQZXJzaXN0ZWREYXRhUmVxdWVzdBovLnBlcnNpc3RlbmNlLlJldHJpZXZlTXVsdGlwbGVQZXJzaXN0ZWREYXRhUmVwbHkiAELXAQoPY29tLnBlcnNpc3RlbmNlQhBQZXJzaXN0ZW5jZVByb3RvUAFaZmdpdGh1Yi5jb20vaGFja2h1bnRlcmRldi9waS1zZW5zb3JzL3B1cnN1aXQtYW5kLXNvbG8vcHJvdG8tZGVmaW5pdGlvbnMvX2dlbmVyYXRlZC9zZXJ2aWNlcy9wZXJzaXN0ZW5jZaICA1BYWKoCC1BlcnNpc3RlbmNlygILUGVyc2lzdGVuY2XiAhdQZXJzaXN0ZW5jZVxHUEJNZXRhZGF0YeoCC1BlcnNpc3RlbmNlYgZwcm90bzM", [file_base_empty]);

/**
 * @generated from message persistence.RetrievePersistedDataRequest
 */
export type RetrievePersistedDataRequest = Message<"persistence.RetrievePersistedDataRequest"> & {
  /**
   * @generated from field: string key = 1;
   */
  key: string;
};

/**
 * Describes the message persistence.RetrievePersistedDataRequest.
 * Use `create(RetrievePersistedDataRequestSchema)` to create a new message.
 */
export const RetrievePersistedDataRequestSchema: GenMessage<RetrievePersistedDataRequest> = /*@__PURE__*/
  messageDesc(file_services_persistence_persistence, 0);

/**
 * @generated from message persistence.RetrievePersistedDataReply
 */
export type RetrievePersistedDataReply = Message<"persistence.RetrievePersistedDataReply"> & {
  /**
   * @generated from field: bool dataExists = 1;
   */
  dataExists: boolean;

  /**
   * @generated from field: optional string data = 2;
   */
  data?: string;
};

/**
 * Describes the message persistence.RetrievePersistedDataReply.
 * Use `create(RetrievePersistedDataReplySchema)` to create a new message.
 */
export const RetrievePersistedDataReplySchema: GenMessage<RetrievePersistedDataReply> = /*@__PURE__*/
  messageDesc(file_services_persistence_persistence, 1);

/**
 * @generated from message persistence.PersistDataRequest
 */
export type PersistDataRequest = Message<"persistence.PersistDataRequest"> & {
  /**
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * @generated from field: string data = 2;
   */
  data: string;
};

/**
 * Describes the message persistence.PersistDataRequest.
 * Use `create(PersistDataRequestSchema)` to create a new message.
 */
export const PersistDataRequestSchema: GenMessage<PersistDataRequest> = /*@__PURE__*/
  messageDesc(file_services_persistence_persistence, 2);

/**
 * @generated from message persistence.RetrieveMultiplePersistedDataRequest
 */
export type RetrieveMultiplePersistedDataRequest = Message<"persistence.RetrieveMultiplePersistedDataRequest"> & {
  /**
   * @generated from field: repeated string keys = 1;
   */
  keys: string[];
};

/**
 * Describes the message persistence.RetrieveMultiplePersistedDataRequest.
 * Use `create(RetrieveMultiplePersistedDataRequestSchema)` to create a new message.
 */
export const RetrieveMultiplePersistedDataRequestSchema: GenMessage<RetrieveMultiplePersistedDataRequest> = /*@__PURE__*/
  messageDesc(file_services_persistence_persistence, 3);

/**
 * @generated from message persistence.RetrieveMultiplePersistedDataReply
 */
export type RetrieveMultiplePersistedDataReply = Message<"persistence.RetrieveMultiplePersistedDataReply"> & {
  /**
   * @generated from field: map<string, string> data = 1;
   */
  data: { [key: string]: string };
};

/**
 * Describes the message persistence.RetrieveMultiplePersistedDataReply.
 * Use `create(RetrieveMultiplePersistedDataReplySchema)` to create a new message.
 */
export const RetrieveMultiplePersistedDataReplySchema: GenMessage<RetrieveMultiplePersistedDataReply> = /*@__PURE__*/
  messageDesc(file_services_persistence_persistence, 4);

/**
 * @generated from service persistence.PersistenceService
 */
export const PersistenceService: GenService<{
  /**
   * @generated from rpc persistence.PersistenceService.RetrievePersistedData
   */
  retrievePersistedData: {
    methodKind: "unary";
    input: typeof RetrievePersistedDataRequestSchema;
    output: typeof RetrievePersistedDataReplySchema;
  },
  /**
   * @generated from rpc persistence.PersistenceService.PersistData
   */
  persistData: {
    methodKind: "unary";
    input: typeof PersistDataRequestSchema;
    output: typeof EmptySchema;
  },
  /**
   * @generated from rpc persistence.PersistenceService.RetrieveMultiplePersistedData
   */
  retrieveMultiplePersistedData: {
    methodKind: "unary";
    input: typeof RetrieveMultiplePersistedDataRequestSchema;
    output: typeof RetrieveMultiplePersistedDataReplySchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_services_persistence_persistence, 0);


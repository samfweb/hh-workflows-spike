// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file base/oui.proto (package base, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file base/oui.proto.
 */
export const file_base_oui: GenFile = /*@__PURE__*/
  fileDesc("Cg5iYXNlL291aS5wcm90bxIEYmFzZSJPCgpPdWlEZXRhaWxzEg4KBmhhc091aRgBIAEoCBIQCghzaG9ydE91aRgCIAEoCRIPCgdsb25nT3VpGAMgASgJEg4KBm91aU1hYxgEIAEoCUKcAQoIY29tLmJhc2VCCE91aVByb3RvUAFaVmdpdGh1Yi5jb20vaGFja2h1bnRlcmRldi9waS1zZW5zb3JzL3B1cnN1aXQtYW5kLXNvbG8vcHJvdG8tZGVmaW5pdGlvbnMvX2dlbmVyYXRlZC9iYXNlogIDQlhYqgIEQmFzZcoCBEJhc2XiAhBCYXNlXEdQQk1ldGFkYXRh6gIEQmFzZWIGcHJvdG8z");

/**
 * @generated from message base.OuiDetails
 */
export type OuiDetails = Message<"base.OuiDetails"> & {
  /**
   * @generated from field: bool hasOui = 1;
   */
  hasOui: boolean;

  /**
   * @generated from field: string shortOui = 2;
   */
  shortOui: string;

  /**
   * @generated from field: string longOui = 3;
   */
  longOui: string;

  /**
   * @generated from field: string ouiMac = 4;
   */
  ouiMac: string;
};

/**
 * Describes the message base.OuiDetails.
 * Use `create(OuiDetailsSchema)` to create a new message.
 */
export const OuiDetailsSchema: GenMessage<OuiDetails> = /*@__PURE__*/
  messageDesc(file_base_oui, 0);


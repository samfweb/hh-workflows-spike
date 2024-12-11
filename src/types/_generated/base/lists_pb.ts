// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file base/lists.proto (package base, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file base/lists.proto.
 */
export const file_base_lists: GenFile = /*@__PURE__*/
  fileDesc("ChBiYXNlL2xpc3RzLnByb3RvEgRiYXNlKjgKCFVzZXJMaXN0EggKBFNBRkUQABIJCgVST0dVRRACEgoKBklHTk9SRRADEgsKB1VOS05PV04QBEKeAQoIY29tLmJhc2VCCkxpc3RzUHJvdG9QAVpWZ2l0aHViLmNvbS9oYWNraHVudGVyZGV2L3BpLXNlbnNvcnMvcHVyc3VpdC1hbmQtc29sby9wcm90by1kZWZpbml0aW9ucy9fZ2VuZXJhdGVkL2Jhc2WiAgNCWFiqAgRCYXNlygIEQmFzZeICEEJhc2VcR1BCTWV0YWRhdGHqAgRCYXNlYgZwcm90bzM");

/**
 * @generated from enum base.UserList
 */
export enum UserList {
  /**
   * @generated from enum value: SAFE = 0;
   */
  SAFE = 0,

  /**
   * @generated from enum value: ROGUE = 2;
   */
  ROGUE = 2,

  /**
   * @generated from enum value: IGNORE = 3;
   */
  IGNORE = 3,

  /**
   * @generated from enum value: UNKNOWN = 4;
   */
  UNKNOWN = 4,
}

/**
 * Describes the enum base.UserList.
 */
export const UserListSchema: GenEnum<UserList> = /*@__PURE__*/
  enumDesc(file_base_lists, 0);


// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file base/auth.proto (package base, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file base/auth.proto.
 */
export const file_base_auth: GenFile = /*@__PURE__*/
  fileDesc("Cg9iYXNlL2F1dGgucHJvdG8SBGJhc2UqrQIKDFdpZmlBdXRoVHlwZRIHCgNXRVAQABIRCg1XUEEyX0VfODAyMV9YEAESFAoQV1BBMl9FX0ZUXzgwMjFfWBADEhgKFFdQQTJfRV84MDIxX1hfU0hBMjU2EAUSEQoNV1BBMl9QX0FFUzEyOBACEhQKEFdQQTJfUF9GVF9BRVMxMjgQBBIRCg1XUEEyX1BfU0hBMjU2EAYSFAoQV1BBMl9QX0ZUX1NIQTM4NBATEhEKDVdQQTJfUF9TSEEzODQQFBIRCg1XUEEzX1BfU0FFMjU2EAgSFAoQV1BBM19QX0ZUX1NIQTI1NhAJEhEKDVdQQTNfRV9TQUUyNTYQCxIRCg1XUEEzX0VfU0hBMzg0EAwSFAoQV1BBM19FX0ZUX1NBRTI1NhANEgcKA09XRRASQp0BCghjb20uYmFzZUIJQXV0aFByb3RvUAFaVmdpdGh1Yi5jb20vaGFja2h1bnRlcmRldi9waS1zZW5zb3JzL3B1cnN1aXQtYW5kLXNvbG8vcHJvdG8tZGVmaW5pdGlvbnMvX2dlbmVyYXRlZC9iYXNlogIDQlhYqgIEQmFzZcoCBEJhc2XiAhBCYXNlXEdQQk1ldGFkYXRh6gIEQmFzZWIGcHJvdG8z");

/**
 * @generated from enum base.WifiAuthType
 */
export enum WifiAuthType {
  /**
   * @generated from enum value: WEP = 0;
   */
  WEP = 0,

  /**
   * @generated from enum value: WPA2_E_8021_X = 1;
   */
  WPA2_E_8021_X = 1,

  /**
   * @generated from enum value: WPA2_E_FT_8021_X = 3;
   */
  WPA2_E_FT_8021_X = 3,

  /**
   * @generated from enum value: WPA2_E_8021_X_SHA256 = 5;
   */
  WPA2_E_8021_X_SHA256 = 5,

  /**
   * @generated from enum value: WPA2_P_AES128 = 2;
   */
  WPA2_P_AES128 = 2,

  /**
   * @generated from enum value: WPA2_P_FT_AES128 = 4;
   */
  WPA2_P_FT_AES128 = 4,

  /**
   * @generated from enum value: WPA2_P_SHA256 = 6;
   */
  WPA2_P_SHA256 = 6,

  /**
   * @generated from enum value: WPA2_P_FT_SHA384 = 19;
   */
  WPA2_P_FT_SHA384 = 19,

  /**
   * @generated from enum value: WPA2_P_SHA384 = 20;
   */
  WPA2_P_SHA384 = 20,

  /**
   * @generated from enum value: WPA3_P_SAE256 = 8;
   */
  WPA3_P_SAE256 = 8,

  /**
   * @generated from enum value: WPA3_P_FT_SHA256 = 9;
   */
  WPA3_P_FT_SHA256 = 9,

  /**
   * @generated from enum value: WPA3_E_SAE256 = 11;
   */
  WPA3_E_SAE256 = 11,

  /**
   * @generated from enum value: WPA3_E_SHA384 = 12;
   */
  WPA3_E_SHA384 = 12,

  /**
   * @generated from enum value: WPA3_E_FT_SAE256 = 13;
   */
  WPA3_E_FT_SAE256 = 13,

  /**
   * @generated from enum value: OWE = 18;
   */
  OWE = 18,
}

/**
 * Describes the enum base.WifiAuthType.
 */
export const WifiAuthTypeSchema: GenEnum<WifiAuthType> = /*@__PURE__*/
  enumDesc(file_base_auth, 0);

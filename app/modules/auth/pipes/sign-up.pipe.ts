import { createValidate, type IValidation, type tags } from "typia";

export type SignUpRequest = {
  name: string & tags.MinLength<2> & tags.MaxLength<36>;
  email: string & tags.Format<"email">;
  password: string & tags.MinLength<8> & tags.MaxLength<32>;
  accept: true;
};

export const signUpRequestErrors = {
  name: {
    "MinLength<2>": "The name is too short (min 2 characters)",
    "MaxLength<36>": "The name is too long (max 36 characters)",
  },
  email: {
    'Format<"email">': "The input email address is not valid",
  },
  password: {
    "MinLength<8>": "Password too short (min 8 characters)",
    "MaxLength<32>": "Password too long (max 32 characters)",
  },
};

export const validateSignUpRequest: (
  input: Partial<SignUpRequest>,
) => IValidation<SignUpRequest> = createValidate<SignUpRequest>();

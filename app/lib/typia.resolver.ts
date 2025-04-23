import { toNestErrors, validateFieldsNatively } from "@hookform/resolvers";
import type {
  FieldError,
  FieldValues,
  Resolver,
  ResolverError,
  ResolverOptions,
  ResolverSuccess,
} from "react-hook-form";
import { createIs, type IValidation } from "typia";

const isTypiaErrors = createIs<IValidation.IError[]>();

const $inputRegExp = /^\$input\.?/g;
const $arrayDotRegExp = /\.|(\[\d+\])/;
const $arrayIndexRegExp = /\[(\d+)\]/;

/**
 * Converts a string path (e.g. users[0].name) into a nested error object from @hookform/resolvers.
 * Helps react-hook-form display errors correctly in nested field structures.
 * @param errors
 * @param path
 * @param error
 */
function mapError<_TFieldValues extends FieldValues = FieldValues>(
  path: string,
  _error: { type: string; message: string },
) {
  const parts = path
    // Splits the path into segments.
    .split($arrayDotRegExp)
    .filter(Boolean)
    .map((part) => part.replace($arrayIndexRegExp, ".$1"));

  const errors: Record<string, FieldError> = {};

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];

    // Check if the field is a part of an array
    const _isArray = !Number.isNaN(Number(parts[i + 1]));

    // If the field has not already set - set an error message
    if (!errors[part]) {
    }
  }

  return errors;
}

/**
 * Extract the last error path from typia
 * @param expected string - the path error from typia (eg. string & Format<"email">)
 * @returns string - the last path of the error (eg. Format("email"))
 */
const extractConstraint = (expected: string): string => {
  return expected.split("&")?.at(-1)?.trim() || "_";
};

/**
 *
 * @param assertion
 * @param messages
 * @returns
 */
export function typiaResolver<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues extends TFieldValues = TFieldValues,
>(
  validate: (input: Partial<TFieldValues>) => IValidation<TTransformedValues>,
  messages?:
    | Partial<Record<keyof TFieldValues, Record<string, string>>>
    | undefined,
): Resolver<TFieldValues> {
  return (
    values: TFieldValues,
    _context: TContext | undefined,
    options: ResolverOptions<TFieldValues>,
    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: <explanation>
  ) => {
    try {
      // validate the input
      const result = validate(values);

      options.shouldUseNativeValidation && validateFieldsNatively({}, options);
      // if success return the values
      if (!result.success) {
        throw result.errors;
      }

      return {
        values: result.data,
        errors: {},
      } satisfies ResolverSuccess<TTransformedValues>;
    } catch (e) {
      console.error(e, isTypiaErrors(e));
      if (isTypiaErrors(e)) {
        let errors: Record<string, FieldError> = {};

        // else structure the error messages to { [fieldName] : FieldError }
        for (const error of e) {
          const path = error.path.replaceAll($inputRegExp, "") || "_"; // Extract 'email' from '$input.email'

          if (!path) {
            continue;
          }

          console.log(path);

          // get the last constrain from "expected" error message
          const constraint = extractConstraint(error.expected);

          errors = mapError(path, {
            type: error.path,
            message: messages?.[path]?.[constraint] ?? error.expected,
          });
        }

        return {
          values: {} as TFieldValues,
          errors: toNestErrors(errors, options),
        } satisfies ResolverError<TFieldValues>;
      }

      throw e;
    }
  };
}

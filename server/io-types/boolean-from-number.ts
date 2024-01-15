import * as t from "io-ts";
import * as E from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";

/**
 * Convert a number (0, 1) to a boolean and vice versa.
 * Useful if your database has no boolean type.
 */
export const BooleanFromNumber = new t.Type(
  "BooleanFromNumber",
  t.boolean.is,
  (input, context) =>
    pipe(
      t.number.validate(input, context),
      E.chain((value) => {
        return value === undefined ? t.failure([t.ValidationError.of(value, context)]): value ? t.success(true):t.success(false);
      })
    ),
  (value) => (value ? 1 : 0)
);

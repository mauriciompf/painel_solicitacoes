import { describe, it, expect } from "vitest";
import { firstLetterUppercaseArray } from "../utils/firstLetterUppercaseArray";

describe("firstLetterUppercaseArray", () => {
  it("should all names be capitalize on first letter", () => {
    expect(
      firstLetterUppercaseArray([
        "rafael",
        "joão",
        "pedro",
        "miguel",
        "maurício",
      ]),
    ).toEqual(["Rafael", "João", "Pedro", "Miguel", "Maurício"]);
  });
});

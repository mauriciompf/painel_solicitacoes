import { describe, it, expect } from "vitest";
import { firstLetterCapitalizeArray } from "../utils/firstLetterCapitalizeArray";

describe("firstLetterCapitalizeArray", () => {
  it("should all names be capitalize on first letter", () => {
    expect(
      firstLetterCapitalizeArray([
        "rafael o gomes",
        "joão pedro",
        "pedro joão",
        "miguel the gomes",
        "maurício farias",
      ]),
    ).toEqual([
      "Rafael O Gomes",
      "João Pedro",
      "Pedro João",
      "Miguel The Gomes",
      "Maurício Farias",
    ]);
  });
});

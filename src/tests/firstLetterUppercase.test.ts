import { describe, it, expect } from "vitest";
import { firstLetterCapitalize } from "../utils/firstLetterCapitalize";

describe("firstLetterUppercase", () => {
  it("should uppercase the first letter of the word 'vitru'", () => {
    expect(firstLetterCapitalize("vitru")).toBe("Vitru");
  });
});

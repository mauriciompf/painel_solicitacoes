import { describe, it, expect } from "vitest";

const firstLetterCapitalize = (word: string) => {
  return word;
};

describe("FirstLetterUppercase", () => {
  it("should uppercase the first letter of the word 'vitru'", () => {
    expect(firstLetterCapitalize("vitru")).toBe("Vitru");
  });
});

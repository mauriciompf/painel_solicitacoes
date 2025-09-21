import { describe, it, expect } from "vitest";
import { firstLetterCapitalize } from "../utils/firstLetterCapitalize";

describe("firstLetterCapitalize", () => {
  it("should capitalize the word 'vitru education brazil'", () => {
    expect(firstLetterCapitalize("vitru education brazil")).toEqual(
      "Vitru Education Brazil",
    );
  });
});

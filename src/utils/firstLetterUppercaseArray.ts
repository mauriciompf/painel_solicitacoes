import { firstLetterCapitalize } from "./firstLetterCapitalize";

export const firstLetterUppercaseArray = (arr: string[]) => {
  return arr.map((element) => firstLetterCapitalize(element));
};

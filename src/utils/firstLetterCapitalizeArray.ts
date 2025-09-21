import { firstLetterCapitalize } from "./firstLetterCapitalize";

export const firstLetterCapitalizeArray = (arr: string[]) => {
  return arr.map((element) => firstLetterCapitalize(element));
};

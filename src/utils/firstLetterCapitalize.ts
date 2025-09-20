export const firstLetterCapitalize = (word: string) => {
  const getWord = word.trim();
  const splitWords = getWord.split(" ");

  const wordsCapitalizeArray = splitWords.map((word) => {
    const lastLetter = word.length;
    const firstLetter = word.split("")[0];

    return firstLetter.toUpperCase().concat(word.substring(1, lastLetter)); // Concat the first Letter to the rest of the current word
  });

  const wordsCapitalize = wordsCapitalizeArray.join(" ");
  return wordsCapitalize;
};

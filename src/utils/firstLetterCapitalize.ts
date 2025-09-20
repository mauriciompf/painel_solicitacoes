export const firstLetterCapitalize = (word: string) => {
  const letterUpperCase = word.split("")[0].toUpperCase();
  return letterUpperCase + word.slice(1);
};

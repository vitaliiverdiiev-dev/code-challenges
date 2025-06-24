/*
 The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

 https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
 */

export function duplicateEncoder(word: string) {
  const lowerCaseWord = word.toLowerCase();
  const wordMap = new Map();

  for (const char of lowerCaseWord) {
    wordMap.has(char)
      ? wordMap.set(char, wordMap.get(char) + 1)
      : wordMap.set(char, 1);
  }

  return [...lowerCaseWord]
    .map((char) => (wordMap.get(char) > 1 ? ")" : "("))
    .join("");
}

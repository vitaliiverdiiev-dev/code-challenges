/*
  Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

  https://www.codewars.com/kata/56b1f01c247c01db92000076/
*/

export function doubleChar(str: string): string {
  return [...str].map(char => char + char).join('').toString();
}

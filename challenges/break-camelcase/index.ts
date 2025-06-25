export function breakCamelcase(str: string): string {
  let sentence = "";

  for (const char of str) {
    if (char === char.toUpperCase()) {
      sentence += " " + char;
    } else {
      sentence += char;
    }
  }

  return sentence;
}

// export function breakCamelcase(str: string): string {
//   return str.replace(/([A-Z])/g, " $1");
// }

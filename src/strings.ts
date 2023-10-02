const palindrome = (word: string): boolean => {
  const reversedWord = word.split("").reverse().join("");

  return reversedWord === word;
};

const padString = (text: string, padding: number): string =>
  text.padStart(padding + text.length);

console.log(palindrome("madam"));
console.log(palindrome("hello"));
console.log(padString("hello", 5));

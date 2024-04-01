// Given a string `s`, find the length of the longest substring
// without repeating characters.

const lengthOfSubstring = (s) => {
  console.log(s);
  for (let i = 0; i <= s.length; i++) {
    for (let string of s) {
      if (string[i] !== undefined) {
        console.log(`String`, string[i]);
      }
    }
  }
};

console.log(lengthOfSubstring('abcabcbb')); // 3 => The answer is "abc", with the length of 3.
// console.log(lengthOfSubstring('bbbbb')); // 1 => The answer is "b", with the length of 1.
// console.log(lengthOfSubstring('pwwkew')); // 3 => The answer is "wke", with the length of 3

// Given a string `s`, find the length of the longest substring
// without repeating characters.

const lengthOfSubstring = (s) => {
  let maxLength = 0;
  let left = 0;
  let right = 0;
  const seen = new Set();

  while (right < s.length) {
    if (!seen.has(s[right])) {
      seen.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    } else {
      seen.delete(s[left]);
      left++;
    }
  }

  return maxLength;
};

// console.log(lengthOfSubstring('abcabcbb')); // 3 => The answer is "abc", with the length of 3.
// console.log(lengthOfSubstring('bbbbb')); // 1 => The answer is "b", with the length of 1.
console.log(lengthOfSubstring('pwwkew')); // 3 => The answer is "wke", with the length of 3

// let max = 0;
// let arr = [];
// for (let i = 0; i <= s.length; i++) {
//   for (let j = i; j <= s.length; j++) {
//     let current = s[j];
//     let next = s[j + 1];

//     console.log(current, next, nextNext);

//     if (current === s[j]) {
//       arr.push(s[j]);
//       return arr;
//     }
//   }
// }

// return max;

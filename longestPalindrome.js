// Given a string s,
// return the longest palindromic substring in s.

const longPalindrome = (s) => {
  if (!s) return '';

  const check = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    console.log(left, right);
    return right - left - 1;
  };

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    const odd = check(s, i, i);
    const even = check(s, i, i + 1);
    const max = Math.max(odd, even);

    if (max > end - start) {
      start = i - Math.floor((max - 1) / 2);
      end = i + Math.floor(max / 2);
    }
  }
};

const longestPalindrome = function (s) {
  const table = Array(s.length + 1).fill([]);

  let max = 1;
  let start = 0;

  // check palindrome for one character
  for (let i = 0; i < s.length; i++) {
    table[i] = [...s];
  }

  // check palindrome for two characters
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      table[i][i + 1] = [...s];
      max = 2;
      start = i;
    }
  }

  //check palindrome for greather than 3 characters
  for (let len = 3; len <= s.length; len++) {
    for (let i = 0; i < s.length - len + 1; i++) {
      const j = i + len - 1;
      if (s[i] === s[j] && table[i + 1][j - 1]) {
        table[i][j] = [...s];
        if (len > max) {
          max = len;
          start = i;
        }
      }
    }
  }
  return s.slice(start, start + max);
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('ac')); // => a find way to loop thru array
console.log(longestPalindrome('aacabdkacaa'));

// Example 1:
//                                         b
//                                         / \ \
//                                        a   b a
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

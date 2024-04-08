// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

const twoSort = (nums1, nums2) => {
  // Get length of arrays
  const m = nums1.length;
  const n = nums2.length;
  // add sum length
  const add = m + n;
  // empty array for sorted list
  let ans = [];
  // pointers for each element
  let pointer1 = 0;
  let pointer2 = 0;
  // loop up to lengths of arrays sum
  for (let i = 0; i < add; i++) {
    // sort elements into new array from smallest to biggest
    console.log(nums1[pointer1], nums2[pointer2], nums2.length);
    if (nums1[pointer1] <= nums2[pointer2] || nums2.length <= pointer2) {
      ans.push(nums1[pointer1]);
      pointer1 += 1;
    } else {
      ans.push(nums2[pointer2]);
      pointer2 += 1;
    }
  }

  if (ans.length % 2 === 0) {
    // take two mid numbers and divide them by 2
    return (ans[ans.length / 2 - 1] + ans[ans.length / 2]) / 2;
  } else {
    // take the mid number
    return ans[(ans.length - 1) / 2];
  }
};

console.log(twoSort([1, 3], [2]));
console.log(twoSort([1, 2], [3, 4]));
console.log(twoSort([], [1]));
console.log(twoSort([], [2, 3]));

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Given an integer array nums sorted in non-decreasing order,

// remove the duplicates in-place such that each unique element appears only once.

// The relative order of the elements should be kept the same.

// Then return the number of unique elements in nums.

const rmDuplicates = (nums) => {
  if (nums.length === 0) return 0;
  let i = 0;
  for (j = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};

console.log(rmDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(rmDuplicates([1, 1, 2]));

// You are given an integer array height of length n.

// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

const maxArea = (height) => {
  // set pointer for last index
  let lastIdx = height.length - 1;
  // set starting pointer
  let pointerLeft = 0;
  let pointerRight = lastIdx;
  let maxArea = 0;

  while (pointerLeft < pointerRight) {
    let width = pointerRight - pointerLeft;
    let area = Math.min(height[pointerLeft], height[pointerRight]) * width;

    maxArea = Math.max(maxArea, area);

    // move index over if left < right
    if (height[pointerLeft] <= height[pointerRight]) {
      pointerLeft++;
    } else {
      // right index is less so move down
      pointerRight--;
    }
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));

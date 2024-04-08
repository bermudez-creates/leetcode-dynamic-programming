// You are given an integer array height of length n.

// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

const maxArea = (height) => {
  let lastIdx = height.length - 1;

  let pointerLeft = height[0];
  let pointerRight = height[lastIdx];
  let maxArea = 0;
  console.log(`LEFT --`, pointerLeft);
  console.log(`RIGHT --`, pointerRight);

  // while (pointerLeft < pointerRight) {
  //   let width = pointerRight - pointerLeft;
  //   console.log(`Width:`, width);
  //   let area = Math.min(height[pointerLeft], height[pointerRight]) * width;

  //   maxArea = Math.max(maxArea, area);

  //   if (height[pointerLeft] <= height[pointerRight]) {
  //     console.log(`LEFT in IF statement--`, pointerLeft);
  //     pointerLeft++;
  //   } else {
  //     console.log(`RIGHT in IF statement--`, pointerRight);
  //     pointerRight--;
  //   }
  // }

  for (let i = 0; i < height.length; i++) {
    console.log(`Index`, height[i]);
    console.log(`POINTER RIGHT`, pointerRight);
    console.log(`POINTER LEFT`, pointerLeft);
    if (pointerLeft < height[i] || pointerLeft <= height[i]) {
      pointerLeft = height[i + 1];
      console.log(`---`, pointerLeft);
    } else {
      pointerRight = height[i - 1];
    }
    let area = Math.min(height[pointerLeft], height[pointerRight]);
    console.log(`Area:`, area);
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
//console.log(maxArea([1, 1]));

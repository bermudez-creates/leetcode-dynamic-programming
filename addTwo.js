// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

const addTwoNumbers = (l1, l2) => {
  // Create separate function to reverse arrays
  const convertedList = (listNode) => {
    if (listNode) {
      listNode = listNode.reverse();
    }

    return listNode;
  };
  // Pass in list arguments to be reverses
  const list1 = convertedList(l1);
  const list2 = convertedList(l2);

  // BigInt appends 'n' to end of integer literal (number that has not decimal point || exponetial part)
  // Add both lists once elments are concactenated => ['3','4','2'] becomes 342n
  let newTotal = BigInt(list1.join('')) + BigInt(list2.join(''));
  // .toString() => returns object as a string instead of as a data type => 807n becomes 807 .
  newTotal = newTotal.toString().split('');
  const splitTotal = newTotal.reverse();

  return splitTotal;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

// list1.join() => 3,4,2
// list1.join('') => 342

// BigInt isolates new joined number into a numeric data type => 342n

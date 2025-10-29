import type { Challenge } from '../types';

export const javaScriptChallenges: Challenge[] = [
  {
    instruction:
      'Given an array of numbers, create a new array with each number doubled.',
    hint: 'Use the `.map()` method.',
    exampleArray: '[1, 2, 3, 4, 5]',
  },
  {
    instruction: 'Filter out all odd numbers from an array of numbers.',
    hint: 'Use the `.filter()` method with a modulo check.',
    exampleArray: '[10, 15, 20, 25, 30]',
  },
  {
    instruction: 'Sum all the numbers in an array.',
    hint: 'Use the `.reduce()` method.',
    exampleArray: '[5, 10, 15, 20]',
  },
  {
    instruction: 'Check if all numbers in an array are positive.',
    hint: 'Use the `.every()` method.',
    exampleArray: '[1, 2, 3, 4, 5]',
  },
  {
    instruction: 'Check if there is at least one negative number in an array.',
    hint: 'Use the `.some()` method.',
    exampleArray: '[3, -2, 7, 0]',
  },
  {
    instruction: 'Find the first number greater than 10 in an array.',
    hint: 'Use the `.find()` method.',
    exampleArray: '[4, 9, 11, 15]',
  },
  {
    instruction:
      "Find the index of the first string that contains the letter 'a'.",
    hint: 'Use the `.findIndex()` method.',
    exampleArray: `['dog', 'cat', 'bird', 'ant']`,
  },
  {
    instruction: 'Sort an array of numbers in ascending order.',
    hint: 'Use the `.sort()` method with a compare function `(a, b) => a - b`.',
    exampleArray: '[42, 7, 19, 3, 25]',
  },
  {
    instruction: 'Create an array of the lengths of each string in an array.',
    hint: 'Use `.map()` and `.length`.',
    exampleArray: `['apple', 'banana', 'cherry', 'date']`,
  },
  {
    instruction: 'Flatten a 2D array into a single array.',
    hint: 'Use `.flat()` or `.reduce()` with `.concat()`.',
    exampleArray: `[
      [1, 2],
      [3, 4],
      [5, 6]
    ]`,
  },
  {
    instruction: 'Remove duplicate values from an array.',
    hint: 'Use `new Set()` or `.filter()` with `.indexOf()`.',
    exampleArray: '[1, 2, 2, 3, 4, 4, 5]',
  },
  {
    instruction: 'Group an array of objects by a property value.',
    hint: 'Use `.reduce()` to build an object with keys.',
    exampleArray: `[
      { name: 'Alice', group: 'A' },
      { name: 'Bob', group: 'B' },
      { name: 'Charlie', group: 'A' },
      { name: 'David', group: 'B' }
    ]`,
  },
];

import type { Challenges } from '../types';

export const javaScriptChallenges: Challenges = {
  'forEach()': {
    instruction:
      "Log each fruit in the array to the console, prefixed with its index (e.g., '0: apple').",
    hint: `Use the '.forEach()' method — it gives you both the element and the index.`,
    exampleArray: `["apple", "banana", "cherry", "date"]`,
  },
  'map()': {
    instruction:
      'Given an array of numbers, create a new array with each number doubled.',
    hint: `Use the '.map()' method.`,
    exampleArray: '[1, 2, 3, 4, 5]',
  },
  'filter()': {
    instruction: 'Filter out all odd numbers from an array of numbers.',
    hint: `Use the '.filter()' method with a modulo check.`,
    exampleArray: '[10, 15, 20, 25, 30]',
  },
  'find()': {
    instruction: 'Find the first number greater than 10 in an array.',
    hint: `Use the '.find()' method.`,
    exampleArray: '[4, 9, 11, 15]',
  },
  'every()': {
    instruction: 'Check if all numbers in an array are positive.',
    hint: `Use the '.every()' method.`,
    exampleArray: '[1, 2, 3, 4, 5]',
  },
  'some()': {
    instruction: 'Check if there is at least one negative number in an array.',
    hint: `Use the '.some()' method.`,
    exampleArray: '[3, -2, 7, 0]',
  },
  'reduce()': {
    instruction: 'Group an array of objects by a property value.',
    hint: `Use '.reduce()' to build an object with keys.`,
    exampleArray: `[
      { name: 'Alice', group: 'A' },
      { name: 'Bob', group: 'B' },
      { name: 'Charlie', group: 'A' },
      { name: 'David', group: 'B' }
    ]`,
  },
};

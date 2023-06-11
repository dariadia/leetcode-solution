---
title: 'Task: Add to Array-Form of Integer'
excerpt: 'The array-form of an integer num is an array repanswerenting its digits in left to right order. For example, for num = 1321, the array form is [1,3,2,1]. Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.'
date: '2023-04-13T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---
## Add to Array-Form of Integer

The array-form of an integer num is an array representing its digits in left to right order. For example, for `num = 1321`, the array form is `[1,3,2,1]`. Given num, the array-form of an integer, and an integer `k`, return the array-form of the integer `num + k`.

### Algorithm: with "carry"
Add numbers in a school-math way, column by column.

####  Time complexity: O(max⁡(N,log⁡K)) 
- where N is the length of num.
#### Space complexity: O(max⁡(N,log⁡K))

<br />

### Solution

```js
const addToArrayForm = (num: string, k: number) => {
  let i = num.length - 1
  let answer = []
  while (i >= 0 || k > 0) {
	// we do the general check: take the last element,
    // add it to k then take the carry 
    // (if any to the next iteration) 
    if (i >= 0){
      answer.push((num[i] + k) % 10)
      k = Math.trunc((num[i] + k) / 10)
			i--
    } 
	// the edge case: increase the array length if needed
    // for when, e.g. i = -1
		else {
      answer.push(k % 10)
      k = Math.trunc(k / 10)
    }
  }

// reminder: we started from the last
  // but we need first->last
  return answer.reverse()
}
```

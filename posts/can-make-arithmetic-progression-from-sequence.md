---
title: 'Task: Can Make Arithmetic Progression From Sequence'
excerpt: 'A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same. Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.'
date: '2023-06-13T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

## Can Make Arithmetic Progression From Sequence

A sequence of numbers is called an **arithmetic progression** if the **difference between any two consecutive elements is the same**. Given an array of numbers arr, return `true` if the array can be rearranged to form an arithmetic progression. Otherwise, return `false`.

### Algorithm: sort the given data, then iterate

####  Time complexity:  O(n x logn)
- or O(n) for small arrays

#### Space complexity: O(n) (for the sorting) 
- or O(1) for small arrays

<br />


### Solution


```js
const canMakeArithmeticProgression = (arr: number[]): boolean => {
// if arr contains just two elements, 
  // then the difference between then is always the same. One number
  if (arr.length < 3) return true
    
  arr.sort((a, b) => a - b)
  for (let i = 2; i < arr.length; i++)
  // check neighbouring elements
    if (arr[i] - arr[i - 1] !== arr[i - 1] - arr[i - 2]) {
      // quit on the first case which doesn't meet the condition
      return false
    }
  return true
}
```

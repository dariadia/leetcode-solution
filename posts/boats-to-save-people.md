---
title: 'Task: Task Boats to Save People'
excerpt: 'You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit. Return the minimum number of boats to carry every given person.'
date: '2023-05-01T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

## Task Boats to Save People

You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit. Return the minimum number of boats to carry every given person.

### Algorithm: two pointers
- We sort the people array in ascending order;
- Then init left & right pointers, and a counter for the boats already taken.
- Then check and incremeant accordingly.

####  Time complexity: O(n x logn)
- for the sorting algorithm

#### Space complexity: O(1)

<br />


### Solution


```js
const numRescueBoats = (people: number[], limit: number): number => {
  let left = 0
  let right = people.length - 1
  let boats = 0
  
  people.sort((a, b) => a - b)

  while (left <= right) {
    if (people[left] + people[right] <= limit) left++
    right--
    boats++
  }
  return boats
}
```

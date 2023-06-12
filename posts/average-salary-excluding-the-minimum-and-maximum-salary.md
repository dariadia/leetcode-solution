---
title: 'Task: Average Salary Excluding the Minimum and Maximum Salary'
excerpt: 'You are given an array of unique integers salary where salary[i] is the salary of the ith employee. Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.'
date: '2023-04-20T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

## Average Salary Excluding the Minimum and Maximum Salary

You are given an array of unique integers salary where salary[i] is the salary of the ith employee. Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

### Algorithm: sort the array, then reduce

####  Time complexity: O(n)
#### Space complexity: O(1)

<br />

### Solution

```js
const average = (salary: number[]): number => {
  let helper: number[] = salary.sort((a, b) => a - b).slice(1, -1)
  return helper.reduce((a, b) => a + b) / helper.length
}
```

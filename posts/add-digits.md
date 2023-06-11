---
title: 'Task: Add Digits'
excerpt: 'Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.'
date: '2023-04-11T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

## Add Digits

Given an integer **num**, repeatedly add all its digits until the **result** has only **one digit**, and return it.

E.g.

```js
let num = 38

3 + 8 = 11
1 + 1 = 2 // return this
```

### Algorithm: maths
The value we're asked to compute is the so-called Digital Root. It goes like: "the original number is divisible by 9 if and only if the sum of its digits is divisible by 9".

For us, this means - find value, and we get our answer. While calculating a digital root we meet a set of operations which are recurring: we add the digits of the number, then if the sum of digits is greater than 9, we add the digits again. We perform this until we reach a single-digit number. Which is _exactly_ what we need for this problem.

**Note**: we can also just add the numbers with a while loop but it takes more space

####  Time complexity: O(1)
#### Space complexity: O(1)
- we use no extra space

<br />


### Solution


```js
const addDigits = (num) => {
  if (num === 0) return num
  return num % 9 === 0 ? 9 : num % 9
}
```

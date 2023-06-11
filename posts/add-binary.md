---
title: 'Task: Add Binary'
excerpt: 'Given two binary strings a and b, return their sum as a binary string.'
date: '2023-04-10T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

Given two binary strings **a** and **b**, return their _**sum** as a binary string_.

### Algorithm: math with "carry"

####  Time complexity: O(n)
- we pass each number only once
#### Space complexity: O(1)
- we use constant space to store the answer and the "carry"

<br />

Start from the last element and do school math where

1st + 2nd + carry = sum, new carry, decimal sum

E.g.

```js
0 +  0  + 0 = 0, 0, 0
0 +  0  + 1 = 1, 0, 1
0 +  1  + 1 = 0, 1, 2
1 +  1  + 1 = 1, 1, 3
```

**Note** we can also use the built-in Bigin method instead

### Solution


```js
const addBinary = (a, b) => {
  let carry = 0
  let answer = ''

  for (let len1 = a.length - 1, len2 = b.length - 1; 
    len1 >= 0 || len2 >= 0 || carry > 0;
    len1--, len2--) {

    let sum = (+a[len1] || 0) + (+b[len2] || 0) + carry

    if (sum > 1) {
      sum = sum % 2
      carry = 1
    } else carry = 0
    result = `${sum}${answer}`
    
  }
  return answer
}
```

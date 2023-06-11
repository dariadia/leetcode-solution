---
title: 'Task: Add Binary'
excerpt: 'Given two binary strings a and b, return their sum as a binary string.'
date: '2023-04-10T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

Given two binary strings a and b, return their sum as a binary string.

```js
// lib/markdown.js

import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).use(prism).process(markdown);
  return result.toString();
}
```

```js
let addBinary = (a, b) => {
  let carry = 0
  let result = ''

  let len1 = a.length - 1
  let len2 = b.length - 1

  for ( len1 >= 0 || len2 >= 0 || carry > 0 len1--, len2--) {
    let sum = (+a[len1] || 0) + (+b[len2] || 0) + carry
    if (sum > 1) {
      sum = sum % 2
      carry = 1
    } else {
      carry = 0
    }
    result = `${sum}${result}`
  }
  return result
}
```

---
title: 'Task: Can Place Flowers'
excerpt: 'You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots. Given an integer array flowerbed containing 0`s and 1`s, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.'
date: '2023-06-02T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

## Can Place Flowers

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots. Given an integer array flowerbed containing 0`s and 1`s, where `0` means **empty** and `1` means **not empty**, and an integer `n`, return if `n` new flowers can be planted in the flowerbed without violating **the no-adjacent-flowers rule**.


### Algorithm: traverse all the elements of the flowerbed. Find the empty ones, for them check both adjacent positions, then if all empty => we can plant.

####  Time complexity: O(n)
- we see each element once

#### Space complexity: O(1)

<br />


### Solution

```js
const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
  let current = 0 
  const len = flowerbed.length
	for (let i = 0; i <= len; i++) {
  // find out which elements are 0 (empty). 
		if (i < len && flowerbed[i] === 0) {
			current++
      // we have two exceptions, because the first and the last positions
      // have only one adjacent, for them we need extra +1.
			if (i === 0) current++
			if (i == len - 1) current++
		} else {
      // we can place at most (c - 1) / 2 flowers into the gap, 
      // where c is a number of continuous 0 in the gap. 
			n -= Math.trunc((current - 1) / 2)
      // stop checking as soon as count becomes = n
      // we have all the extra beds we need
			if (n <= 0) return true
			current = 0
		}
	}
  // if the count obtained < n, return false
	return false
}
```

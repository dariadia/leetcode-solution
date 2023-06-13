---
title: 'Task: Bulb Switcher'
excerpt: 'There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it`s off or turning off if it`s on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb. Return the number of bulbs that are on after n rounds.'
date: '2023-05-05T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

## Bulb Switcher

There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every `i` bulb. For the nth round, you only toggle the last bulb. 

Return the number of bulbs that are on after `n` rounds.

### Algorithm: math.
- Since all the bulbs are initially off, we can notice that at the end only the bulbs which are toggled an odd number of times will remain on.
- And that number is their perfect square.

####  Time complexity: O(1)
#### Space complexity: O(1)

<br />


### Solution


```js
function bulbSwitch(n: number): number {
  return Math.floor(Math.sqrt(n))
}
```

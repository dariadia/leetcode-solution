---
title: 'Task: Find All Anagrams in a String'
excerpt: 'Given two strings s and p, return an array of all the start indices of p's anagrams in s. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.'
date: '2023-04-15T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

## Find All Anagrams in a String

Given two strings `s` and `p`, return an array of all the start indices of `p`'s anagrams in `s`. **An Anagram** is a word or phrase formed by **rearranging the letters** of a different word or phrase, typically **using all the original letters exactly once**.

### Algorithm:
- Build a hash map of characters and their counts. 
- e.g. `{ a: 3, f: 1, i: 1}`
- Save the unique characters as `uniqueChars`.
- Iterate `s` using 2 pointers `min` and `max`. 
- Adjusts the map and `uniqueChars`.
- Keep increasing the max pointer. 
- When we reach the desired length, we move the min pointer too.
- Note: min can only move one position ahead.

####  Time complexity: O(n)
#### Space complexity: O(n)

<br />


### Solution


```js
const findAnagrams = (s: string, p: string): number[] => {
  let map = {}
  let uniqueChars = 0

  for (let char of p) {
    // if not in the map, then 
    if (map[char] === null) {
      uniqueChars++
      map[char] = 1
    // if already in the map, then increase the count
    } else map[char]++
  }
    
  let answer = []
  let min = 0
  let max = 0

  for (max; max < s.length; max++) {
    if (map[s[max]] !== null) map[s[max]]--
    if (map[s[max]] === 0) uniqueChars--
    if (uniqueChars === 0) answer.push(min)
    if (max - min + 1 == p.length) {
      if (map[s[min]] !== null) map[s[min]]++
      if (map[s[min++]] === 1) uniqueChars++
    }
  }
  return answer
}
```

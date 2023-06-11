---
title: 'Task: Verifying an Alien Dictionary'
excerpt: 'In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters. Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.'
date: '2023-04-15T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

## Verifying an Alien Dictionary

In an alien language, surprisingly, they also use **English lowercase letters**, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters. Given a sequence of words written in the alien language, and the order of the alphabet, return `true` if and only **if the given words are sorted lexicographically** in this alien language.

### Algorithm: 
- Make a map aka order of the alphabet (e.g. `{ 1: 'd', 2: 'r' }`). 
- Iterate over "words" in pairs. If word1[0] === word2[0], go on. 
- If not, then check the map for order of the alphabet. 
- Quit (return `false`) on the first invalid pair.

####  Time complexity: O(N)
- where N is the total number of characters in "words" since we iterate each letter once (worst case). Could be M + N, BUT M = 26 letters, so it's O(N)

#### Space complexity: O(1)

<br />


### Solution


```js
const isAlienSorted = 
  (words: string[], order: string): boolean => {
  let orderMap = {}
  for (let i = 0; i < order.length; i++) {
    orderMap[order[i]] = i
  }

  const isValid = (word1, word2) => {
    let len = word1.length < word2.length 
      ? word1.length : word2.length
    for (let i = 0; i < len; i++) {
      if (orderMap[word1[i]] > orderMap[word2[i]]) {
        return true
      }
      if (orderMap[word1[i]] < orderMap[word2[i]]) {
        return false
      }
    }
    return word1.length >= word2.length
  }

    for (let i = 1; i < words.length; i++){
      if (!isValid(words[i], words[i-1])) return false
    }
    
    return true
}
```

---
title: 'Task: Binary Tree Zigzag Level Order Traversal'
excerpt: 'Given the root of a binary tree, return the zigzag level order traversal of its nodes` values. (i.e., from left to right, then right to left for the next level and alternate between).'
date: '2023-04-29T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

## Binary Tree Zigzag Level Order Traversal

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

### Algorithm: walk through
- We keep a two-way stack (this means we can take from start/end).
- Walk through the tree, keep track of the level number.

####  Time complexity: O(n)
- we visit each node once

#### Space complexity: O(n)

<br />

### Solution

```js
const zigzagLevelOrder = (root: TreeNode | null): number[][] => {
  let result = []
  walker(root, 0, result)
  return result
}

const walker = (node, level, result) =>{ 
  if (!node) return

  if (result[level] == null) result.push([])

  if (level % 2 === 0) result[level].push(node.val)
  else result[level].unshift(node.val)

  walker(node.left, level + 1, result)
  walker(node.right, level + 1, result)
}
```

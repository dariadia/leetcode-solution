---
title: 'Task: Check Completeness of a Binary Tree'
excerpt: ''
date: '2023-06-16T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

## Check Completeness of a Binary Tree

Given the root of a binary tree, determine if it is a complete binary tree. In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between `1` and `2h` nodes inclusive at the last level `h`.

### Algorithm: BFS (*1)
- Note: we can also do DFS (*2), O(n) same complexity

- We create a boolean variable to track if the null node has been visited. 
- Init a queue and push the root into it.
- While the queue has items: dequeue the first element.
- Once we traverse the entire tree without seeing a non-null node after a null node, we return `true`.

####  Time complexity: O(n)
- we visit each node only once

#### Space complexity: O(n)

<br />


### Solution


```js
// BFS * 1
const isCompleteTree = (root: TreeNode | null): boolean => {
  let seenNull = false
  let queue = [root]
    
  while (queue.length) {
    const nextNodes = []
        
    for (let nextNode of queue) {
      if (!nextNode) seenNull = true
      else {
        if (seenNull) return false
        nextNodes.push(nextNode.left)
        nextNodes.push(nextNode.right)
      }
    }
    queue = nextNodes
  }
  return true
}

// DFS * 2
const isCompleteTree = (root: TreeNode | null): boolean => {
  const dfs = (node: TreeNode): TreeNode[] => {
    if (!node) return [0]
    return [...dfs(node.left), ...dfs(node.right)].map(node => node + 1)
  }
    
  const nodes = dfs(root)
  const max = nodes[0]
    
  for (let i = 1; i < nodes.length; i++) {
    if (nodes[i] > nodes[i - 1]) return false
    if (nodes[i] < max - 1) return false
  }
  return true
};
```

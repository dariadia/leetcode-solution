---
title: 'Task: Find Eventual Safe States'
excerpt: 'There is a directed graph of n nodes with each node labeled from 0 to n - 1. The graph is represented by a 0-indexed 2D integer array graph where graph[i] is an integer array of nodes adjacent to node i, meaning there is an edge from node i to each node in graph[I]. A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node). Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.'
date: '2023-11-07T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

There is a directed graph of `n` nodes with each node labeled from `0` to `n - 1`. The graph is represented by a 0-indexed 2D integer array graph where `graph[i]` is an integer array of nodes adjacent to node `i`, meaning there is an edge from node `i` to each node in `graph[I]`. A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node). Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.

### Algorithm: depth-first search (DFS)

Use DFS to detect the nodes that lead to a cycle, i.e., unsafe nodes. If we find a cycle, we will mark all of the nodes in the cycle as unsafe and then go back and mark all of the nodes that led to this cycle as unsafe. Let's find a cycle first.

####  Time complexity: O(n + m), 
- Where `n` is the number of nodes and `m` is number of edges in the graph.
#### Space complexity: O(n)

<br />


### Solution


```js

const eventualSafeNodes = (graph: number[][]): number[] => {
    const ans: number[] = [];

// Create two boolean sets.
// The "visited" keeps track of visited nodes.
// "inStack" – of nodes that are in the ongoing DFS stack.
// It helps to detect a cycle in the graph and the unsafe nodes.
    const visited: Set<number> = new Set();
    const currentStack: Set<number> = new Set();

    const isSafeNode = (node: number): boolean => {
// If node is already in inStack, either it is a cycle or a previously detected unsafe node.
// Either way, this means the node is unsafe.
        if(currentStack.has(node)) return false;

// If node is already visited (but not in inStack), it is a safe node.
        if(visited.has(node)) return true;
// Mark node as visited and also mark as inStack
        visited.add(node);
        currentStack.add(node);

// Iterate over all the outgoing edges of the node.
// For each neighbour recursively call isSafeNode.
// If there is a cycle from the neighbour (or the neighbour is a previously detected as unsafe),
// return false without unmarking node in inStack.
        for (let nextNode of (graph[node] ?? [])) {
            if(!isSafeNode(nextNode)) return false;
        }
// After processing all the outgoing edges of the node, mark the node as safe.
        currentStack.delete(node);
        return true;
    }

    for (let i = 0; i < graph.length; i++) isSafeNode(i);
    for (let i = 0; i < graph.length; i++) {
        if(!currentStack.has(i)) ans.push(i);
    }

    return ans;
};

```

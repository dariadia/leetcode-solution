---
title: 'Task: Checking Existence of Edge Length Limited Paths'
excerpt: 'An undirected graph of n nodes is defined by edgeList, where edgeList[i] = [ui, vi, disi] denotes an edge between nodes ui and vi with distance disi. Note that there may be multiple edges between two nodes. Given an array queries, where queries[j] = [pj, qj, limitj], your task is to determine for each queries[j] whether there is a path between pj and qj such that each edge on the path has a distance strictly less than limitj.'
date: '2023-05-17T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

## Checking Existence of Edge Length Limited Paths

An undirected graph of n nodes is defined by edgeList, where `edgeList[i] = [ui, vi, disi]` denotes an edge between nodes ui and vi with distance disi. Note that there may be multiple edges between two nodes. Given an array queries, where queries `[j] = [pj, qj, limitj]`, your task is to determine for each `queries[j]` whether there is a path between `pj` and `qj` such that each edge on the path has a distance strictly less than `limitj`.

Return a `boolean` array answer, where `answer.length == queries.length` and the `j`th value of answer is `true` if there is a path for `queries[j]` is `true`, and `false` otherwise.


### Algorithm: union find.
- We create class UninionFind, which stores the connection: node to its parent.
– When we add new items to an instance of UninionFind, we can recurse to get the max parent.
- Now we only have to sort all edges and queries, and iterate till the end unless our condition fails earlier.

####  Time complexity: O(n + e x log⁡e + q x log⁡q)
- where `n`is the length of the given array, `e` - the number of edges, `q` is the number of queries.
- O(n) to initialize a group and rank arrays in the UninionFind object.
- O(elog⁡e + qlog⁡q) to sort the `edgeList` and `queriesWithIndex` arrays. 
- O(e+q) (at worst each edge and query is processed only once) costs iterating over `q` queries and `e` edges. 
- O(α(n)) takes each of the methods of the UnionFind class: find(), union(). But! For this case `α(T)`, aka the inverse Ackermann function, grows so slowly that it doesn't exceed approximately T < 10^{600}. And because the function grows so slowly, we consider it to be O(1).

#### Space complexity: O(n)
- O(n): the UnionFind class needs space for storing the group and rank arrays.

<br />


### Solution


```js
class UnionFind {
  parent: number[]
  constructor(n) {
    this.parent = Array(n).fill().map((_,i) => i)
  }
  find(i: number) {
    if (this.parent[i] !== i) this.parent[i] = this.find(this.parent[i])
    return this.parent[i]
  }
  union(i: number, j: number) {
    this.parent[this.find(j)] = this.find(i)
  }
}

const distanceLimitedPathsExist = (n, edgeList, queries) => {
  const unionFind = new UnionFind(n), answer = [];

// Create a list of index of queries in incresing order of limit for each query
  const order = Array(queries.length).fill().map((_, i) => i)
  order.sort((a,b) => queries[a][2] - queries[b][2])

  // Sort edgeList in incresing order of distances
  edgeList.sort((a,b) => a[2] - b[2])

  let index = 0
  for (const item of order) {
    const [pointer1, pointer2, limit] = queries[item]

    // For each query, add all edges having distance less than limit
    while (edgeList[index]?.[2] < limit){
      unionFind.union(edgeList[index][0], edgeList[index][1])
      index++
    }
    answer[item] = unionFind.find(pointer1) === unionFind.find(pointer2)
  }
  return answer
};
```

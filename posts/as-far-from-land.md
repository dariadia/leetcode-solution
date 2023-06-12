---
title: 'Task: As Far from Land as Possible'
excerpt: 'Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance. If no land or water exists in the grid, return -1. The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.'
date: '2023-04-18T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

## As Far from Land as Possible

Given an `n x n` grid containing only values `0` and `1`, where `0` represents **water** and `1` represents **land**, find a water cell such that its **distance to the nearest land cell is maximized**, and return the distance. If no land or water exists in the grid, return `-1`. The distance used in this problem is the Manhattan **distance**: the distance between two cells `(x0, y0)` and `(x1, y1)` is `|x0 - x1| + |y0 - y1|`.

### Algorithm: a two-pass dynamic programming
- We iterate over the matrix from top-left to bottom-right and create a "land-only" queue (e.g. `[[0, 0, 0], [0, 1, 0]]`).
  - So when the cell is land (with value 1), store the minimum distance as 0 into the queue.
- Store the max encountered distance.
- Set the possible directions.
- Iterate the queue, keep track of the max encountered.
- From queue tiles go in specified directions, if it's water 
  - recalculate, 
  - push to queue, 
  - replace as land in the original grid.
- Return the stored max or `-1`.

####  Time complexity: O(n^2)
- because we iterate a two-dimensional grid, an operation which costs n^2

#### Space complexity: O(1)
- we don't need extra space

<br />

### Solution

```js
const maxDistance = (grid: number[][]): number => {
  let queue = []
    
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) queue.push([i,j,0])
    }
  }
    
  let max = 0
  let directions = [[-1,0],[1,0],[0,1],[0,-1]]

  while (queue.length > 0) {
    let [row, column, count] = queue.shift()
    max = Math.max(max, count)

    for (let dir of directions) {
      let [dx, dy] = dir
      let x = row + dx
      let y = column + dy

      if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) continue
      if (grid[x][y] == 1) continue

      queue.push([x, y, count + 1])
      grid[x][y] = 1
    }
  }

  return max == 0 ? -1 : max
}
```

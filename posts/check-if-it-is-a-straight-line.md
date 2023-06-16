---
title: 'Task: Check If It Is a Straight Line'
excerpt: 'You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.'
date: '2023-06-15T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

## Check If It Is a Straight Line

You are given an array coordinates, `coordinates[i] = [x, y]`, where `[x, y]` represents the coordinate of a point. Check if these points make a straight line in the `XY` plane.

### Algorithm: math.
- We sketch a line that always crosses the 1st and 2nd points in the list of coordinates, then  check if the rest also lie on that line.
- To prove that they do: 
  - for `a` and `b` we calculate a vector that is perpendicular to our line, 
  - the equation for the line is `a * (x1 - x2) + b * (y1 - y2) = 0`, with x2 and y2 being the first or second point in the list of coordinates. 
- Then use `Array.every()` to check if this is `true` by every member of the given array.

####  Time complexity: O(n)
#### Space complexity: O(1)

<br />


### Solution

```js
const checkStraightLine = (coordinates: number[][]): boolean => {
  let a = -(coordinates[1][1] - coordinates[0][1])
  let b = coordinates[1][0] - coordinates[0][0]
  return coordinates.every(
    coordinate =>
      a * (coordinate[0] - coordinates[0][0]) +
      b * (coordinate[1] - coordinates[0][1]) === 0
    )
}
```

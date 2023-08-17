---
title: 'Task: Capacity To Ship Packages Within D Days'
excerpt: 'A conveyor belt has packages that must be shipped from one port to another within days days. The ith package on the conveyor belt has a weight of weights[i]. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). We may not load more weight than the maximum weight capacity of the ship. Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.'
date: '2023-06-14T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

## Capacity To Ship Packages Within D Days

A conveyor belt has packages that must be shipped from one port to another within `days` days. The `ith` package on the conveyor belt has a weight of `weights[i]`. Each day, we load the ship with packages on the conveyor belt (in the order given by weights). **We may not load more weight than the maximum weight** capacity of the ship. **Return the least weight capacity** of the ship that will result in all the packages on the conveyor belt being shipped within `days` days.

### Algorithm: binary search
- perform it for every weight to see if passes

####  Time complexity: O(n⋅log(n))
- time complexity of binary search is O(log n) 

#### Space complexity: O(1)

<br />


### Solution


```js
const daysNeeded = (weights, capacity): number => {
  // start with 0: we have no load on the ship yet
  let currentShipWeight = 0
    
  // we need at least a day
  let days = 1
    
  for (let weight of weights) {
    // we load the current weight onto the ship
    currentShipWeight += weight
        
    // if our weight exceeds our capacity 
    // we come back for it the next day => 
    // days++ && reset currentShipWeight = 0
    if (currentShipWeight > capacity) {
      currentShipWeight = weight
      days += 1    
    }
        
  }
    return days
}

const shipWithinDays = (weights: number[], days: number): number => {
  // init
  let maxValue = -Infinity
  let sumOfWeights = 0
    
  // find the max in weight and total weight
  for (let weight of weights) {
    maxValue = Math.max(maxValue, weight)
    sumOfWeights += weight
  }
    
  // we need a ship large enough for the max value
  // because we cannot split that one
  // hence, no ship smaller than maxValue is the answer
  let minAnswer = maxValue
    
  // we also can load all weights onto one big ship
  let maxAnswer = sumOfWeights
    
	// think of it this way [minAnswer, minAnswer + 1, ..., maxAnswer - 1, maxAnswer]
	// this array represents all possible ship capacities that could be our answer
  // do binary search on this array
  while(minAnswer < maxAnswer) {
    const candidateCapacity = Math.floor((minAnswer + maxAnswer) / 2)
        
    // check if we can ship within the number of days given
    if (daysNeeded(weights, candidateCapacity) <= days) {
      maxAnswer = candidateCapacity
    }
    // then we make sure this is the lowest capacity possible
    // if we need more days than we are given => this isn't our answer
    // so we will have to increase our min answer 
    if (daysNeeded(weights, candidateCapacity) > days) {
      minAnswer = candidateCapacity + 1
    }
  }
    
  // our minAnswer is our minimum possible answer so we return it
  return minAnswer
}
```

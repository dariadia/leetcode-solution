---
title: 'Task: Best Time to Buy and Sell Stock'
excerpt: 'You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.'
date: '2023-04-25T05:35:07.322Z'
author:
  name: Daria V. Diachkova
  picture: '/assets/blog/authors/daria.jpeg'
---

## Best Time to Buy and Sell Stock

You are given an array prices where `prices[i]` is the price of a given stock on the ith day. You want to **maximize your profit** by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

### Algorithm: one pass.
- Imagine the stocks as a graph. We are interested in the peaks and valleys of this graph. 
- Then we find the largest price following each valley, which difference _could_ be the max profit. 
- If not profitable, return `0`.

####  Time complexity: O(n)
#### Space complexity: O(1)

<br />

### Solution

```js
function maxProfit(prices: number[]): number {
  // buy on day 0
  let buy = 0
  // sell on day 1
  let sell = 1
  let max_profit = 0

  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      // our current profit
      let profit = prices[sell] - prices[buy]
      max_profit = Math.max(max_profit, profit)
    } else  buy = sell
    
    sell++
  }

  return max_profit
}
```

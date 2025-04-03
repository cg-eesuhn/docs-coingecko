---
title: Coin Price by Token Addresses
excerpt: >-
  This endpoint allows you to **query a token price by using token contract
  address**
api:
  file: coingecko-public-api-v3.json
  operationId: simple-token-price
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍 **Tips**
>
> * You may obtain the asset platform and contract address via several ways:
>   * refers to respective coin page and find ‘contract address’.
>   * refers to [`/coins/list`](/reference/coins-list) endpoint (`include platform = true`).
> * You may flag to include more data such as market cap, 24hr volume, 24hr change, last updated time etc.

> 📘 **Notes**
>
> * The endpoint returns the global average price of the coin that is aggregated across all active exchanges on CoinGecko.
> * You may cross-check the price on [CoinGecko](https://www.coingecko.com) and learn more about our price methodology [here](https://www.coingecko.com/en/methodology).
> * Cache/Update Frequency: every 60 seconds for Public API.
>   * Every 20 seconds for [Pro-API](https://www.coingecko.com/en/api/pricing) (Analyst, Lite, Pro, Enterprise).

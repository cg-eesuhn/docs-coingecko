---
title: Coin Historical Chart Data by Token Address
excerpt: >-
  This endpoint allows you to **get the historical chart data including time in
  UNIX, price, market cap and 24hr volume based on asset platform and particular
  token contract address**
api:
  file: coingecko-public-api-v3.json
  operationId: contract-address-market-chart
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
>   * refers to respective coin page and find ‘contract address'.
>   * refers to [`/coins/list`](/reference/coins-list) endpoint (`include platform = true`).

> 📘 **Notes**
>
> * You may leave the interval as empty for automatic granularity:
>   * 1 day from current time = **5-minutely** data
>   * 2 - 90 days from current time = **hourly** data
>   * above 90 days from current time = **daily** data (00:00 UTC)
> * Cache / Update Frequency:  
>   * Every 5 minutes for all the API plans.
>   * The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35). The cache will always expire at 00:40 UTC.
> * Access to historical data via the Public API (Demo plan) is **restricted to the past 365 days** only. To access the complete range of historical data, please subscribe to one of our [paid plans](https://www.coingecko.com/en/api/pricing) to obtain a Pro-API key.

---
title: Coin Historical Chart Data within Time Range by Token Address
excerpt: >-
  This endpoint allows you to **get the historical chart data within certain
  time range in UNIX along with price, market cap and 24hr volume based on asset
  platform and particular token contract address**
api:
  file: coingecko-pro-api-v3.json
  operationId: contract-address-market-chart-range
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
> * You may leave the interval params as empty for automatic granularity:
>   * 1 day from current time = **5-minutely** data
>   * 1 day from any time (except current time) = **hourly** data
>   * 2 - 90 days from any time = **hourly** data
>   * above 90 days from any time = **daily** data (00:00 UTC)
> * For **non-Enterprise plan subscribers** who would like to get hourly data, please leave the interval params empty for auto granularity.
> * The **5-minutely** and **hourly** interval params are also exclusively available to **Enterprise plan subscribers**, bypassing auto-granularity:
>   * `interval=5m`: 5-minutely historical data (responses include information from the past 10 days, up until now)
>   * `interval=hourly`: hourly historical data (responses include information from the past 100 days, up until now)
> * Data availability:
>   * `interval=5m`: Available from 9 February 2018 onwards
>   * `interval=hourly`: Available from 30 Jan 2018 onwards
> * Cache / Update Frequency:\
>   Based on days range (all the API plans)
>   * 1 day = 30 seconds cache
>   * 2 -90 days = 30 minutes cache
>   * 90 days = 12 hours cache
>   * The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35). The cache will always expire at 00:40 UTC

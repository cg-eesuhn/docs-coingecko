---
title: Pool OHLCV chart by Pool Address
excerpt: >-
  This endpoint allows you to **get the OHLCV chart (Open, High, Low, Close,
  Volume) of a pool based on the provided pool address on a network**
api:
  file: on-chain-dex-api-beta.json
  operationId: pool-ohlcv-contract-address
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
> * You may use this endpoint to query the historical price and volume of a token.
> * You may select the timeframe with its respective aggregate to get the intended OHLCV data (e.g. `minute?aggregate=15` for 15 minutes OHLCV).

> 📘 **Notes**
>
> * This endpoint uses epoch/unix format for its timestamp. Example: `1708850449`.
> * [Paid plan](https://www.coingecko.com/en/api/pricing) subscribers (Analyst plan & above) can access data from **September 2021 to the present**, depending on when the pool started tracking on GeckoTerminal.
>   * If no earlier data is available, an empty response will be returned.
>   * Each API call can only retrieve data for a **maximum range of 6 months**. To fetch older data, use the `before_timestamp` parameter to query in multiple requests.
> * Pools with more than 2 tokens are not yet supported for this endpoint.
> * Each OHLCV array (under `"ohlcv_list"`) consists of 6 elements in the following order:
>   * Timestamp: The epoch/unix timestamp representing the start of the time interval.
>   * Open: The opening price of the asset at the beginning of the interval.
>   * High: The highest price reached during the interval.
>   * Low: The lowest price reached during the interval.
>   * Close: The price of the asset at the end of the interval.
>   * Volume: The total trading volume of the asset during the interval.
> * **Skipped Intervals**: To ensure concise and relevant data, specific timeframe intervals (e.g. minutely) with no recorded swaps are **excluded** from the response.
>   * Higher granularity timeframes (e.g. 1 minute) are more likely to skip intervals due to periods of inactivity, while lower granularity timeframes (e.g. daily) are less affected.
> * Cache/Update frequency: every 30 seconds.
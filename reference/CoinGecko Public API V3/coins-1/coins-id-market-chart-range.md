---
title: Coin Historical Chart Data within Time Range by ID
excerpt: >-
  This endpoint allows you to **get the historical chart data of a coin within
  certain time range in UNIX along with price, market cap and 24hr volume based
  on particular coin ID**
api:
  file: coingecko-public-api-v3.json
  operationId: coins-id-market-chart-range
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
> * You may obtain the coin ID (API ID) via several ways:
>   * refers to respective coin page and find ‘API ID’.
>   * refers to [`/coins/list`](/reference/coins-list) endpoint.
>   * refers to google sheets [here](https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit?usp=sharing).

> 📘 **Notes**
>
> * You may leave the interval params as empty for automatic granularity:
>   * 1 day from current time = **5-minutely** data
>   * 1 day from any time (except current time) = **hourly** data
>   * 2 - 90 days from any time = **hourly** data
>   * above 90 days from any time = **daily** data (00:00 UTC)
> * Cache / Update Frequency:\
>   Based on days range (all the API plans)
>   * 1 day = 30 seconds cache
>   * 2 -90 days = 30 minutes cache
>   * 90 days = 12 hours cache
> * The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35). The cache will always expire at 00:40 UTC.
> * Access to historical data via the Public API (Demo plan) is **restricted to the past 365 days** only. To access the complete range of historical data, please subscribe to one of our [paid plans](https://www.coingecko.com/en/api/pricing) to obtain a Pro-API key.

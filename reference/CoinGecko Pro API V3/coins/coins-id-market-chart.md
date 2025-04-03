---
title: Coin Historical Chart Data by ID
excerpt: >-
  This endpoint allows you to **get the historical chart data of a coin
  including time in UNIX, price, market cap and 24hr volume based on particular
  coin ID**
api:
  file: coingecko-pro-api-v3.json
  operationId: coins-id-market-chart
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
> * You may use tools like [epoch converter ](https://www.epochconverter.com) to convert human readable date to UNIX timestamp.

> 📘 **Notes**
>
> * You may leave the interval params as empty for automatic granularity:
>   * 1 day from current time = **5-minutely** data
>   * 2 - 90 days from current time = **hourly** data
>   * above 90 days from current time = **daily** data (00:00 UTC)
> * For **non-Enterprise plan subscribers** who would like to get hourly data, please leave the interval params empty for auto granularity.
> * The **5-minutely** and **hourly** interval params are also exclusively available to **Enterprise plan subscribers,** bypassing auto-granularity:
>   * `interval=5m`: 5-minutely historical data (responses include information from the past 10 days, up until now).
>   * `interval=hourly`: hourly historical data (responses include information from the past 100 days, up until now).
> * Cache / Update Frequency:  
>   * Every 30 seconds for all the API plans (for last data point).
>   * The last completed UTC day (00:00) data is available **10 minutes after midnight** on the next UTC day (00:10).

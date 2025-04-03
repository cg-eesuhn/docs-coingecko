---
title: 💼 Coin OHLC Chart within Time Range by ID
excerpt: >-
  This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a
  coin within a range of timestamp based on particular coin ID**
api:
  file: coingecko-pro-api-v3.json
  operationId: coins-id-ohlc-range
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍 Tips
> 
> - You may obtain the coin ID (API ID) via several ways:
>   - refers to respective coin page and find ‘API ID’.
>   - refers to [`/coins/list`](/reference/coins-list) endpoint.
>   - refers to google sheets [here](https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit?usp=sharing).
> - For historical chart data with better granularity, you may consider using [/coins/{id}/market_chart](/reference/coins-id-market-chart) endpoint.

> 📘 Notes
> 
> - The timestamp displayed in the payload (response) indicates the end (or close) time of the OHLC data.
> - Interval Options:
>   - Daily Interval (`interval=daily`):
>     - up to 180 days per request/ 180 daily interval candles.
>   - Hourly Interval (`interval=hourly`):
>     - up to 31 days per request/ 744 hourly interval candles.
> - Data availability: 
>   - Available from 9 February 2018 onwards (`1518147224` epoch time).
> - Exclusive for Paid Plan Subscribers (Analyst, Lite, Pro and Enterprise).
> - Cache / Update Frequency: 
>   - Every 15 minutes for all the API plans.
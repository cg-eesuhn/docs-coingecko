---
title: 💼 Global Market Cap Chart Data
excerpt: >-
  This endpoint allows you to **query historical global market cap and volume
  data by number of days away from now**
api:
  file: coingecko-pro-api-v3.json
  operationId: global-market-cap-chart
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 📘 **Notes**
> 
> - CoinGecko equivalent page: <https://www.coingecko.com/en/global-charts>.
> - Data Granularity (auto):
>   - 1 day from now = **hourly** data
>   - 2 days & above from now = **daily** data
> - Exclusive for all Paid Plan Subscribers (Analyst, Lite, Pro and Enterprise).
> - The last completed UTC day (00:00) is available 5 minutes after midnight on the next UTC day (00:05). The cache will **always expire at 00:05 UTC**. If you wish to get the latest daily data (00:00 UTC), you can make request at 00:05 UTC or later.
> - Cache / Update Frequency: every 1 minute.
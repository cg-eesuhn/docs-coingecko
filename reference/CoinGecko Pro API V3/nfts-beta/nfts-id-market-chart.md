---
title: 💼 NFTs Collection Historical Chart Data by ID
excerpt: >-
  This endpoint allows you **query historical market data of a NFT collection,
  including floor price, market cap, and 24hr volume, by number of days away
  from now**
api:
  file: coingecko-pro-api-v3.json
  operationId: nfts-id-market-chart
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
> * Data Granularity (auto):
>   * 1-14 days from now = **5-minutely** data
>   * 15 days & above from now = **daily** data (00:00 UTC)
> * Cache/Update Frequency: every 5 minutes
> * The last completed UTC day (00:00) is available 5 minutes after midnight on the next UTC day (00:05).
> * Exclusive for Paid Plan Subscribers (Analyst, Lite, Pro and Enterprise).

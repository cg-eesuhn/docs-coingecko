---
title: Coins List (ID Map)
excerpt: >-
  This endpoint allows you to **query all the supported coins on CoinGecko with
  coins ID, name and symbol**
api:
  file: coingecko-pro-api-v3.json
  operationId: coins-list
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
> - You may use this endpoint to query the list of coins with coin id for other endpoints that contain params like `id` or `ids` (coin ID).
> - By default, this endpoint returns full list of active coins that are currently listed on CoinGecko.com , you can also flag `status=inactive` to retrieve coins that are no longer available on CoinGecko.com . The inactive coin IDs can also be used with [selected historical data](https://docs.coingecko.com/changelog/30042024) endpoints.

> 📘 **Notes**
> 
> - There is no pagination required for this endpoint.
> - Cache/Update Frequency: every 5 minutes for Pro API (Analyst, Lite, Pro, Enterprise).
---
title: Coins List (ID Map)
excerpt: >-
  This endpoint allows you to **query all the supported coins on CoinGecko with
  coins ID, name and symbol**
api:
  file: coingecko-public-api-v3.json
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
> - You may use this endpoint to query the list of coins with coin ID for other endpoints that contain params like `id` or `ids` (coin ID).

> 📘 **Notes**
> 
> - There is no pagination required for this endpoint.
> - Access to inactive coins via the Public API (Demo plan) is restricted. To access them, please subscribe to one of our paid plans to obtain a Pro-API key.
> - Cache/Update Frequency: 
>   - Every 30 minutes for Public API.
>   - Every 5 minutes for Pro API (Analyst, Lite, Pro, Enterprise).
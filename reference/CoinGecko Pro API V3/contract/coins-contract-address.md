---
title: Coin Data by Token Address
excerpt: >-
  This endpoint allows you to **query all the metadata (image, websites,
  socials, description, contract address, etc.) and market data (price, ATH,
  exchange tickers, etc.) of a coin from the CoinGecko coin page based on an
  asset platform and a particular token contract address**
api:
  file: coingecko-pro-api-v3.json
  operationId: coins-contract-address
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
>   * refers to respective coin page and find ‘contract address’.
>   * refers to [`/coins/list`](/reference/coins-list) endpoint (`include platform = true`).

> 📘 **Notes**
>
> * Coin descriptions may include newline characters represented as `\r\n` (escape sequences), which may require processing for proper formatting.
> * Cache / Update Frequency: every 60 seconds for all the API plans.

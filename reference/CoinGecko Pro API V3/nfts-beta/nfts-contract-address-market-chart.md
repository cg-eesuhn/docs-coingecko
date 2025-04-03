---
title: 💼 NFTs Collection Historical Chart Data by Contract Address
excerpt: >-
  This endpoint allows you **query historical market data of a NFT collection,
  including floor price, market cap, and 24hr volume, by number of days away
  from now based on the provided contract address**
api:
  file: coingecko-pro-api-v3.json
  operationId: nfts-contract-address-market-chart
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
> - This endpoint doesn't support Solana NFT and Art Blocks, please use [/nfts/{id}/market_chart](/reference/nfts-id-market-chart) endpoint instead.
> - Data Granularity (auto):
>   - 1-14 days from now = **5-minutely** data
>   - 15 days & above from now = **daily** data (00:00 UTC)
> - Cache/Update Frequency: every 5 minutes
> - The last completed UTC day (00:00) is available 5 minutes after midnight on the next UTC day (00:05).
> - Exclusive for Paid Plan Subscribers (Analyst, Lite, Pro and Enterprise).
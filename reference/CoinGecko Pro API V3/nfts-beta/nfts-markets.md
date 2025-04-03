---
title: 💼 NFTs List with Market Data
excerpt: >-
  This endpoint allows you to **query all the supported NFT collections with
  floor price, market cap, volume and market related data on CoinGecko**
api:
  file: coingecko-pro-api-v3.json
  operationId: nfts-markets
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
> * You may include values such as `per_page` and `page` to specify how many results you would like to show in the responses per page and which page of responses you would like to show.

> 📘 **Notes**
>
> * Cache / Update Frequency: every 5 minutes.
> * Exclusive for Paid Plan Subscribers (Analyst, Lite, Pro and Enterprise).
> * CoinGecko equivalent page: [https://www.coingecko.com/en/nft](https://www.coingecko.com/en/nft).
> * Some collection with low liquidity may not be ranked by Market Cap value, learn more [here](https://support.coingecko.com/hc/en-us/articles/37226121227545-What-is-NFT-Market-Cap). Sorting by Mcap ranking will first prioritise Market Cap value of liquid NFT collections, then followed by trading volume of illiquid NFT collections.

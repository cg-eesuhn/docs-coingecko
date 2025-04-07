---
title: Top Token Holders by Token Address
excerpt: >-
  This endpoint allows you to **query top token holders based on the provided
  token contract address on a network**
api:
  file: on-chain-dex-api-beta.json
  operationId: top-token-holders-token-address
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
> * The top holders data is currently in **Beta**, with ongoing improvements to data quality, coverage, and update frequency.
> * **Supported chains include**: Solana, EVM (Ethereum, Polygon, BNB, Arbitrum, Optimism, Base), Sui, TON, and Ronin.
> * Max `holders` value:
>   * Maximum 50 for non-Solana networks, 40 for Solana network.
> * Cache/Update frequency: every 60 seconds.
> * 💼 Exclusive for [Paid Plan](https://www.coingecko.com/en/api/pricing) subscribers (Analyst plan or above).
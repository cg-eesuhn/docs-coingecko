---
title: Token Price by Token Addresses
excerpt: >-
  This endpoint allows you to **get token price based on the provided token
  contract address on a network**
api:
  file: on-chain-dex-api-beta.json
  operationId: onchain-simple-price
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
> * If the token's market cap is not verified by the team, the API response will return `null` for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV).
>   * If you require `market_cap_usd` to return FDV value (as seen in [GeckoTerminal.com](https://www.geckoterminal.com/)) when market cap data is unavailable, please specify this parameter `mcap_fdv_fallback=true`.
> * The returned price currency is in USD.
> * Addresses not found in GeckoTerminal will be ignored.
> * This endpoint allows querying **up to 100 contract addresses** per request. This limit is exclusive for [paid plan](https://www.coingecko.com/en/api/pricing) subscribers (Analyst plan & above).
> * When using this endpoint, GeckoTerminal's routing decides the best pool for token price. The price source may change based on liquidity and pool activity. For full control over the price, you may use [`/networks/{network}/pools/{address}`](/reference/pool-address) endpoint by providing a specific pool address.
> * Cache/Update Frequency: every 30 seconds for Pro API (Analyst, Lite, Pro, Enterprise).

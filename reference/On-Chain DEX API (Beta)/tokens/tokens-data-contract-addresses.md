---
title: Tokens Data by Token Addresses
excerpt: >-
  This endpoint allows you to **query multiple tokens data based on the provided
  token contract addresses on a network**
api:
  file: on-chain-dex-api-beta.json
  operationId: tokens-data-contract-addresses
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
> * You may add values such as `top_pools` in the include param to include top pools along with the pools information.
> * If you would like to query token information such as socials, websites, description and etc. You can go to this endpoint [`/networks/{network}/tokens/{address}/info`](/reference/token-info-contract-address) instead.

> 📘 **Notes**
>
> * Addresses not found in GeckoTerminal.com will be ignored.
> * This endpoint allows querying **up to 50 contract addresses** per request. This limit is exclusive for [paid plan](https://www.coingecko.com/en/api/pricing) subscribers (Analyst plan & above). 
> * The endpoint will only return the first top pool for each token.
> * If the token's market cap is not verified by the team, the API response will return `null` for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV).
> * Market Cap can be verified by and sourced from CoinGecko, and the number may be higher than FDV as it may include Market Cap of tokens issued on other blockchain network.
> * Attributes specified in the `include` param will be returned under the top-level `"included"` key.
> * Cache/Update frequency: every 30 seconds.
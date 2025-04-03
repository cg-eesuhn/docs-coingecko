---
title: Specific Pool Data by Pool Address
excerpt: >-
  This endpoint allows you to **query the specific pool based on the provided
  network and pool address**
api:
  file: on-chain-dex-api-beta.json
  operationId: pool-address
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
> - Address not found in GeckoTerminal will be ignored.
> - If the token's market cap is not verified by the team, the API response will return `null` for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV).
> - Market Cap can be verified by and sourced from CoinGecko, and the number may be higher than FDV as it may include Market Cap of tokens issued on other blockchain network.
> - Attributes specified in the `include` param will be returned under the top-level `"included"` key.
> - `locked_liquidity_percentage` will be updated on daily basis.
> - Cache/Update Frequency: every 30 seconds for Pro API (Analyst, Lite, Pro, Enterprise).
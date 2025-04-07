---
title: Trending Search Pools
excerpt: >-
  This endpoint allows you to **query all the trending search pools across all
  networks on GeckoTerminal**
api:
  file: on-chain-dex-api-beta.json
  operationId: trending-search-pools
hidden: false
---
> 📘 **Notes**
>
> * If the token's market cap is not verified by the team, the API response will return `null` for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV).
> * Attributes specified in the `include` param will be returned under the top-level "included" key.
> * Cache/Update frequency: every 60 seconds.
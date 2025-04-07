---
title: 🔥 Megafilter for Pools
excerpt: >-
  This endpoint allows you to **query pools based on various filters across all
  networks on GeckoTerminal**
api:
  file: on-chain-dex-api-beta.json
  operationId: pools-megafilter
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  image: >-
    https://files.readme.io/3c6f5dd03732b99d18df8d0f68ea29a2c2b287c8595ef110a2db1a2c24872b39-API_-_megafilter.png
  robots: index
next:
  description: ''
---
> 👍 **Tips**
>
> * Using `checks` param to filter pools based on various checks:
>   * `checks=no_honeypot` — Filter out Honeypot pools, using GoPlus Token Security and De.Fi Scanner.
>   * `checks=good_gt_score` — Show only pools with a GT Score of at least 75.
>   * `checks=on_coingecko` — Show only pools with tokens that are listed on CoinGecko.
>   * `checks=has_social` — Show only pools with their social links and token information updated.
> * You may include values such as `page` to specify which page of responses you would like to show.

> 📘 **Notes**
>
> * `dexes` param can only be used when **only 1`networks`** is specified.
> * If the token's market cap is not verified by the team, the API response will return `null` for its market cap value, even though it has a displayed value on GeckoTerminal, which might not be accurate as it often matches the Fully Diluted Valuation (FDV).
> * Attributes specified in the `include` param will be returned under the top-level `"included"` key.
> * This endpoint returns up to 20 pools per page. Use the `page` param to navigate more results.
> * Cache/Update frequency: every 30 seconds.
> * 💼 Exclusive for [Paid Plan](https://www.coingecko.com/en/api/pricing) subscribers (Analyst plan or above).
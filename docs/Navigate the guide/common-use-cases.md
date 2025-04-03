---
title: 👀 Common Use Cases
excerpt: Discover the common use cases of CoinGecko API by our users
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## 1. Get Coins Logo Images

* Use [/coins/\{id}](/reference/coins-id) endpoint.
* This endpoint can be used to query other coin's metadata like: links, categories, contract address, community, description in different languages and many more.
  * Coin descriptions may include newline characters represented as `\r\n` (escape sequences), which may require processing for proper formatting.

<br />

## 2. Best Endpoint for Latest Crypto Price

* Use [/simple/price](/reference/simple-price) endpoint.
* This endpoint can be used to query other market data like market cap, 24-hour trading volume and 24-hour price change percentage.

<br />

## 3. Get All Trading Pairs (Tickers) of a Coin

* Use [/coins/\{id}/tickers](/reference/coins-id-tickers) endpoint.

<br />

## 4. Get Trading Pairs of Specific Coins from a Specific Exchange

* Use[ /coins/\{id}/tickers](/reference/coins-id-tickers) endpoint by supplying specific exchange ID.

<br />

## 5. Building Telegram Bot for Latest Coin Listings

* Use `/coins/list/new` endpoint (Exclusive for Paid Plan subscribers only).

<br />

## 6. Get List of Coins Under Specific Category

* Use[ /coins/markets](/reference/coins-markets) by supplying specific category.

<br />

## 7. Identify DEX Decentralized Exchanges

* Use [/exchanges/list](/reference/exchanges-list) endpoint to get full list of exchanges with ID on CoinGecko.
* Use [/exchanges/\{id}](/reference/exchanges-id) to find out whether the exchange is centralized or decentralized.
* Example of responses (using Uniswap V3 as example) :

  Since Uniswap is a DEX, therefore it shows `"centralized": false`

  ```json JSON
  {
    "name": "Uniswap V3 (Ethereum)",
    ......
    "centralized": false, 👈
    ......
    "tickers": [],
    "status_updates": []
  }
  ```

<br />

## 8. Get Bitcoin Dominance Data (BTC.D)

* Use [/global ](/reference/crypto-global)endpoint.
* Example of responses:

  ```json JSON
  {
    "data": {
      "active_cryptocurrencies": 12414,
      ......
      "market_cap_percentage": { 👈
        "btc": 47.82057011844006,👈
        "eth": 16.943340351591583,
        ......
      },
      "market_cap_change_percentage_24h_usd": -5.032104325648996,
      "updated_at": 1706002730
    }
  }
  ```

<br />

## 9. Get Market Cap or Dominance of a Specific Ecosystem

* Use [/coins/categories](/reference/coins-categories).
* The endpoint also returns the 24-hour percentage change, offering insights into the traction of different categories or ecosystems.

<br />

## 10. Get Token Lists of a Specific Blockchain Network

* Use [/token\_lists/\{asset\_platforms\_id}/all.json](https://docs.coingecko.com/reference/token-lists) endpoint (Exclusive for Enterprise Plan subscribers).
* Supply asset platform ID to the endpoint.

<br />

## 11. Get 7-Day Sparkline Price Data of a Coin

* Use [/coins/\{id}](/reference/coins-id) or [/coins/markets](/reference/coins-markets) endpoints by flagging `sparkline = true`.

<br />

## 12. Get Link to Individual CoinGecko Coin Page

* Use [/coins/list](/reference/coins-list) endpoint to get the coin **`{ID}`**.
  * Supply API ID in this URL path format: `www.coingecko.com/en/coins/{ID}`.
* If you wish to the obtain the URL slug of a specific CoinGecko Coin Page, e.g. `www.coingecko.com/en/coins/{web_slug}` you may use [/coin/\{id}](/reference/coins-id) endpoint and obtain the **`{web_slug}`** value.

<br />

## 13. Check Coin Status and Stale Price Updates

* Active: use [/coins/list](/reference/coins-list) endpoint, only active coins will be shown by default. You may also flag **`status=inactive`** to get a list of inactive coins.
* Stale price: use [/simple/price](/reference/simple-price) endpoint, flag `include_last_updated_at = true` to check latest update time.

<br />

## 14. Get Real-Time and Historical Exchange of BTC in USD

* Current exchange rate: use [/exchange\_rates](/reference/exchange-rates) endpoint.
* Historical exchange rate: use [/coins/\{id}/history](/reference/coins-id-history) or [/coins/\{id}/market\_chart](/reference/coins-id-market-chart) endpoints.

<br />

## 15. Get watchlist portfolio data of a Coin

* Use [/coins/\{id}](/reference/coins-id) endpoint by supplying coin ID.
* Example of responses:

  ```json JSON
  {
    "id": "bitcoin",
    ......
    "watchlist_portfolio_users": 1487932, 👈
    "market_cap_rank": 1,
    ......
  }
  ```

<br />

## 16. Get Historical Data for Inactive Coins

**Note**: This is available for paid plan subscribers only.

* Use [/coins/list](/reference/coins-list) endpoint, specifying the status param as `inactive`.
* Example of endpoint request:\
  `https://pro-api.coingecko.com/api/v3/coins/list?include_platform=false&status=inactive&x_cg_pro_api_key=YOUR_API_KEY`
* Retrieve the coin's ID from the endpoint mentioned above and use it to access historical data via the following endpoints:
  * [/coins/\{id}/history](/reference/coins-id-history)
  * [/coins/\{id}/market\_chart](/reference/coins-id-market-chart)
  * [/coins/\{id}/market\_chart/range](/reference/coins-id-market-chart-range)
  * [/coins/\{id}/contract/\{contract\_address}/market\_chart](/reference/contract-address-market-chart)
  * [/coins/\{id}/contract/\{contract\_address}/market\_chart/range](/reference/contract-address-market-chart-range)

<br />

## 17. Get TVL (Total Value Locked) data of a Coin

* Use [/coins/\{id}](/reference/coins-id) endpoint by supplying coin ID.
* Example of responses:

  ```json JSON
  "total_value_locked":
  {
      "btc": 72324,
      "usd": 4591842314
  }
  ```

<br />

## 18. Query Search for Coins, Categories, NFTs, Exchanges, and Pools

We have 2 Search endpoints:

* [/search](/reference/search-data) endpoint allows you to search for coins, categories, exchanges (markets), and NFTs listed on CoinGecko.com. You may query by name or symbol. 
* [/search-pools](https://docs.coingecko.com/v3.1.1/reference/search-pools) endpoint allows you to search for pools listed on [GeckoTerminal.com](https://www.geckoterminal.com/) . You may query by pool contract address, token contract address, or token symbol.

<br />

## 19. Get List of Blockchain Networks supported on CoinGecko and GeckoTerminal.

CoinGecko and GeckoTerminal support different sets of blockchain networks. You can use the following endpoints to find the list of supported networks and their respective IDs:

* CoinGecko:  [/asset-platform-list](/reference/asset-platform-list) 
* GeckoTerminal ([Onchain endpoints](https://docs.coingecko.com/reference/endpoint-overview#-onchain-dex-endpoints-geckoterminal)):  [/networks-list](https://docs.coingecko.com/v3.1.1/reference/networks-list) 

<br />

## 20. Get Native Coin of a Blockchain Network (Asset Platform)

You may use the [/asset-platform-list](/reference/asset-platform-list) endpoint to obtain the native coin id of all networks (asset platforms) listed on [www.coingecko.com](http://www.coingecko.com.).

<br />

## 21. Get Liquidity data of a Liquidity Pool or Token

There are multiple onchain endpoints that provide the liquidity data (`reserve_in_usd`) of a pool, for example: [Specific Pool Data by Pool Address](https://docs.coingecko.com/reference/pool-address).  You may also get liquidity data (`total_reserve_in_usd`) of a token, using endpoints like: [Token Data by Token Address](https://docs.coingecko.com/reference/token-data-contract-address).

Note: `reserve_in_usd` (pool) represents the total liquidity of all tokens within a specific pool, whereas `total_reserve_in_usd` (token) refers to the total liquidity portion attributable to a specific token across all available pools.

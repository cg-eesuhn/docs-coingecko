---
title: 📡 Endpoint Overview
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 📘 Notes
> 
> Any exclusive endpoints for Pro-API users (any paid plan subscribers) will not be included here. 
> 
> For a full list of endpoints, please visit Pro API Documentation, [v3.1.1](/v3.0.1/reference/endpoint-overview) instead.

<br />

## CoinGecko Endpoints: Coins

| Endpoint                                                                                     | Description                                                                                                                                                                             |
| :------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [/ping](/reference/ping-server)                                                              | Check the API server status                                                                                                                                                             |
| [/simple/price](/reference/simple-price)                                                     | Query the prices of one or more coins by using their unique Coin API IDs                                                                                                                |
| [/simple/token_price/{id}](/reference/simple-token-price)                                    | Query the prices of one or more coins by using their unique Coin API IDs                                                                                                                |
| [/simple/supported_vs_currencies](/reference/simple-supported-currencies)                    | Query all the supported currencies on CoinGecko                                                                                                                                         |
| [/coins/list](/reference/coins-list)                                                         | Query all the supported coins on CoinGecko with coins ID, name and symbol                                                                                                               |
| [/coins/markets](/reference/coins-markets)                                                   | Query all the supported coins with price, market cap, volume and market related data                                                                                                    |
| [/coins/{id}](/reference/coins-id)                                                           | Query all the metadata (image, websites, socials, description, contract address, etc.) from the CoinGecko coin page based on a particular coin ID                                       |
| [/coins/{id}/tickers](/reference/coins-id-tickers)                                           | Query the coin tickers on both centralized exchange (CEX) and decentralized exchange (DEX) based on a particular coin ID                                                                |
| [/coins/{id}/history](/reference/coins-id-history)                                           | Query the historical data (price, market cap, 24hr volume, ...) at a given date for a coin based on a particular coin ID                                                                |
| [/coins/{id}/market_chart](/reference/coins-id-market-chart)                                 | Get the historical chart data of a coin including time in UNIX, price, market cap and 24hr volume based on particular coin ID                                                           |
| [/coins/{id}/market_chart/range](/reference/coins-id-market-chart-range)                     | Get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hr volume based on particular coin ID                                      |
| [/coins-id-ohlc](/reference/coins-id-ohlc)                                                   | Get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin ID                                                                                                       |
| [/coins/{id}/contract/{contract_address}](/reference/coins-contract-address)                 | Query all the metadata (image, websites, socials, description, contract address, etc.) from the CoinGecko coin page based on an asset platform and a particular token contract address  |
| [/coins/{id}/contract/../market_chart](/reference/contract-address-market-chart)             | Get the historical chart data including time in UNIX, price, market cap and 24hr volume based on asset platform and particular token contract address                                   |
| [/coins/{id}/contract/../market_chart/range](/reference/contract-address-market-chart-range) | Endpoint to get the historical chart data within certain time range in UNIX along with price, market cap and 24hrs volume based on asset platform and particular token contract address |
| [/coins/categories/list](/reference/coins-categories-list)                                   | Query all the coins categories on CoinGecko                                                                                                                                             |
| [/coins/categories](/reference/coins-categories)                                             | Query all the coins categories with market data (market cap, volume, ...) on CoinGecko                                                                                                  |

<br />

**Try it out for free 👉 \[[GeckoTerminal Public API](https://www.geckoterminal.com/dex-api?utm_source=api-docs&utm_medium=referral&utm_content=endpoint-overview)]**

[block:html]
{
  "html": "<a href=\"https://www.geckoterminal.com/dex-api?utm_source=api-docs&utm_medium=referral&utm_content=endpoint-overview\" target=\"_blank\" rel=\"noopener noreferrer\">\n  <img src=\"https://files.readme.io/5677bf64a465f517f5d24396a846918d9b21f129d4778c7d09498b0575b4bdf5-3cec0bb4-c768-11ef-8915-0e0635d22f11.avif\" alt=\"Interested in On-chain DEX data?\" style=\"width: 100%; max-width: 600px; height: auto;\" />\n</a>"
}
[/block]


<br />

## CoinGecko Endpoints: NFT

| Endpoint                                                                            | Description                                                                                                                             |
| :---------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [nfts/list](/reference/nfts-list)                                                   | Query all supported NFTs with ID, contract address, name, asset platform ID and symbol on CoinGecko                                     |
| [/nfts/{id}](/reference/nfts-id)                                                    | Query all the NFT data (name, floor price, 24hr volume, ...) based on the NFT collection ID                                             |
| [/nfts/{asset_platform_id}/../{contract_address}](/reference/nfts-contract-address) | Query all the NFT data (name, floor price, 24hr volume, ...) based on the NFT collection contract address and respective asset platform |

<br />

## CoinGecko Endpoints: Exchanges & Derivatives

| Endpoint                                                             | Description                                                                                                                   |
| :------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| [/exchanges](/reference/exchanges)                                   | Query all the supported exchanges with exchanges’ data (ID, name, country, ...) that have active trading volumes on CoinGecko |
| [/exchanges/list](/reference/exchanges-list)                         | Query all the exchanges with ID and name                                                                                      |
| [/exchanges/{id}](/reference/exchanges-id)                           | Query exchange’s data (name, year established, country, ...), exchange volume in BTC and tickers based on exchange’s ID       |
| [/exchanges/{id}/tickers](/reference/exchanges-id-tickers)           | Query exchange's tickers based on exchange’s ID                                                                               |
| [/exchanges/{id}/volume_chart](/reference/exchanges-id-volume-chart) | Query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange’s ID                |
| [/derivatives](/reference/derivatives-tickers)                       | Query all the tickers from derivatives exchanges on CoinGecko                                                                 |
| [/derivatives/exchanges](/reference/derivatives-exchanges)           | Query all the derivatives exchanges with related data (ID, name, open interest, ...) on CoinGecko                             |
| [/derivatives/exchanges/{id}](/reference/derivatives-exchanges-id)   | Query the derivatives exchange’s related data (ID, name, open interest, ...) based on the exchanges’ ID                       |
| [/derivatives/exchanges/list](/reference/derivatives-exchanges-list) | Query all the derivatives exchanges with ID and name on CoinGecko                                                             |

<br />

## CoinGecko Endpoints: General

| Endpoint                                                                     | Description                                                                                                   |
| :--------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| [/exchange_rates](/reference/exchange-rates)                                 | Query BTC exchange rates with other currencies                                                                |
| [/asset_platforms](/reference/asset-platforms-list)                          | Query all the asset platforms (blockchain networks) on CoinGecko                                              |
| [/search](/reference/search-data)                                            | Search for coins, categories and markets listed on CoinGecko                                                  |
| [/search/trending](/reference/trending-search)                               | Query trending search coins, NFTs and categories on CoinGecko in the last 24 hours                            |
| [/global](/reference/crypto-global)                                          | Query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc. |
| [/global/decentralized_finance_defi](/reference/global-defi)                 | Query cryptocurrency global decentralized finance (DeFi) data including DeFi market cap, trading volume       |
| [/companies/public_treasury/{coin_id}](/reference/companies-public-treasury) | Query public companies’ Bitcoin or Ethereum holdings                                                          |
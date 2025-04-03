---
title: 🏠 Endpoint Showcase
excerpt: Discover how CoinGecko API is used at CoinGecko.com and GeckoTerminal.com
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## CoinGecko

### [Home Page](https://www.coingecko.com)

<Image align="center" className="border" border={true} src="https://files.readme.io/5efbe42-image.png" />

1. [/global](/reference/crypto-global) — Display global crypto data such as number of active cryptocurrencies, exchanges and etc.
2. [/search/trending](/reference/trending-search) — Display trending search coins, NFTs and categories.
3. `/coins/top_gainers_losers` (Exclusive for Paid Plan subscribers) — Display the largest gainers in 24hr.
4. [/coins/categories](/reference/coins-categories) — Display all the categories list.
5. [/coins/markets](/reference/coins-markets) — Display all the supported coins with market related data.

<br />

### [Coin Page](https://www.coingecko.com/en/coins/bitcoin)

<Image align="center" className="border" border={true} src="https://files.readme.io/2f71923-image.png" />

1. [/coins/\{id}](/reference/coins-id) — Display all the coin data including name, price, market related data, website, explorers and etc.
2. [/simple/price](/reference/simple-price) — Display data such as latest coin price, market cap and 24hr trading volume.
3. [/coins/\{id}/history](/reference/coins-id-history) — Display the historical price data.\
   [/coins/\{id}/market\_chart](/reference/coins-id-market-chart) — Display the historical data in line chart.\
   [/coins/\{id}/market\_chart/range](/reference/coins-id-market-chart-range) — Display the historical data within time range.\
   [/coins/\{id}/ohlc](/reference/coins-id-ohlc) — Display the historical data in candlestick chart.

<br />

### [Exchanges Page](https://www.coingecko.com/en/exchanges/jupiter)

<Image align="center" className="border" border={true} src="https://files.readme.io/9e12298-image.png" />

1. [/exchanges/\{id}](/reference/exchanges-id) — Display the exchange information such as name, type, market related data such as trading volume and etc.
2. [/exchanges/\{id}/volume\_chart](/reference/exchanges-id-volume-chart) — Display the historical volume chart data.
3. [/exchanges/\{id}/tickers](/reference/exchanges-id-tickers) — Display the exchange's tickers.

<br />

### [NFTs Page](https://www.coingecko.com/en/nft/pudgy-penguins)

<Image align="center" className="border" border={true} src="https://files.readme.io/cda9241-image.png" />

<Image align="center" className="border" border={true} src="https://files.readme.io/cc963fe-image.png" />

1. [/nfts/\{id}](/reference/nfts-id) — Display NFT data such as name, contract address, website, market related data such as floor price, market cap, volume and etc. 
2. `/nfts/{id}/market_chart` (Exclusive for Paid Plan subscribers) — Display the historical market data in chart.
3. [/nfts/\{id}](/reference/nfts-id) — Display the description of the NFT collection.
4. `/nfts/{id}/tickers` (Exclusive for Paid Plan subscribers) — Display the tickers of the NFT collection on different NFT marketplace.

<br />

**Try it out for free 👉\[[GeckoTerminal Public API](https://www.geckoterminal.com/dex-api?utm_source=api-docs\&utm_medium=referral\&utm_content=endpoint-showcase)]**

<HTMLBlock>{`
<a href="https://www.geckoterminal.com/dex-api?utm_source=api-docs&utm_medium=referral&utm_content=endpoint-showcase" target="_blank" rel="noopener noreferrer">
  <img src="https://files.readme.io/5677bf64a465f517f5d24396a846918d9b21f129d4778c7d09498b0575b4bdf5-3cec0bb4-c768-11ef-8915-0e0635d22f11.avif" alt="Interested in On-chain DEX data?" style="width: 100%; max-width: 600px; height: auto;" />
</a>
`}</HTMLBlock>

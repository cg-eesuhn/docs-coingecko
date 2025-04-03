---
title: 3. Get Exchanges & NFT Data
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
You can get Exchange and NFT data just like how you get the coins data:

1. Get the ID (exchange or NFT) from `/list` endpoint.
2. Use the ID to query latest or historical market data

| Type                   | Coins                                                          | NFTs                                                                                   | Exchanges                                                              | Derivatives                                                            |
| :--------------------- | :------------------------------------------------------------- | :------------------------------------------------------------------------------------- | :--------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| Get Full List with IDs | [/coins/list](/reference/coins-list)                           | [/nfts/list](/reference/nfts-list)                                                     | [/exchanges/list](/reference/exchanges-list)                           | [/derivatives/exchanges/list](/reference/derivatives-exchanges-list)   |
| Get latest market data | [/coins/\{id}](/reference/coins-id)                            | [/nfts/\{id}](/reference/nfts-id)                                                      | [/exchanges/\{id}](/reference/exchanges-id)                            | [/derivatives/exchanges/\{id}](/reference/derivatives-exchanges-id)    |
| Get Historical Data    | [/coins/\{id}/market\_chart](/reference/coins-id-market-chart) | [/nfts/\{id}/market\_chart](https://docs.coingecko.com/reference/nfts-id-market-chart) | [/exchanges/\{id}/volume\_chart](/reference/exchanges-id-volume-chart) | [/exchanges/\{id}/volume\_chart](/reference/exchanges-id-volume-chart) |

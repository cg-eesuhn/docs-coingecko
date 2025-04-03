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
2. Use the ID to query latest or historical market data:

[block:parameters]
{
  "data": {
    "h-0": "Type                    ",
    "h-1": "Coins",
    "h-2": "NFTs",
    "h-3": "Exchanges",
    "h-4": "Derivatives",
    "0-0": "Get Full List with IDs",
    "0-1": "[/coins/list](/reference/coins-list)",
    "0-2": "[/nfts/list](/reference/nfts-list)",
    "0-3": "[/exchanges/list](/reference/exchanges-list)",
    "0-4": "[/derivatives/exchanges/list](/reference/derivatives-exchanges-list)",
    "1-0": "Get latest market data",
    "1-1": "[/coins/{id}](/reference/coins-id)",
    "1-2": "[/nfts/{id}](/reference/nfts-id)",
    "1-3": "[/exchanges/{id}](/reference/exchanges-id)",
    "1-4": "[/derivatives/exchanges/{id}](/reference/derivatives-exchanges-id)",
    "2-0": "Get Historical Data",
    "2-1": "[/coins/{id}/market_chart](/reference/coins-id-market-chart)",
    "2-2": "`/nfts/{id}/market_chart`  \n(Exclusive for Paid Plan Subscribers)",
    "2-3": "[/exchanges/{id}/volume_chart](/reference/exchanges-id-volume-chart) ",
    "2-4": "[/exchanges/{id}/volume_chart](/reference/exchanges-id-volume-chart)"
  },
  "cols": 5,
  "rows": 3,
  "align": [
    "left",
    "left",
    "left",
    "left",
    "left"
  ]
}
[/block]
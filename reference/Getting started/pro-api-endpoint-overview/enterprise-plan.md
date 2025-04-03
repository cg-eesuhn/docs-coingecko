---
title: 👑 Enterprise Plan
excerpt: Exclusive endpoints available for **Enterprise plan clients only**
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 📘 **Notes**
> 
> - Please be aware that the following endpoints are currently in Beta, and there may be future changes.
> - If you are currently subscribed to our Enterprise plan and do not have access to the endpoints listed below, kindly reach out to us at [api@coingecko.com](mailto:api@coingecko.com).

[block:parameters]
{
  "data": {
    "h-0": "Endpoint",
    "h-1": "Description",
    "0-0": "[/coins/{id}/circulating_supply_chart](/reference/coins_id_circulating_supply_chart)",
    "0-1": "Query historical circulating supply of a coin by number of days away from now based on provided coin ID",
    "1-0": "[/coins/{id}/circulating_supply_chart/range](/reference/coins_id_circulating_supply_chart_range)",
    "1-1": "Query historical circulating supply of a coin, within a range of timestamp based on the provided coin ID",
    "2-0": "[/coins/{id}/total_supply_chart](/reference/coins_id_total_supply_chart)",
    "2-1": "Query historical total supply of a coin by number of days away from now based on provided coin ID",
    "3-0": "[/coins/{id}/total_supply_chart/range](/reference/coins_id_total_supply_chart_range)",
    "3-1": "Query historical total supply of a coin, within a range of timestamp based on the provided coin ID",
    "4-0": "[/token_lists/{asset_platform_id}/all.json](/reference/token_lists_asset_platform_id)",
    "4-1": "Get full list of tokens of a blockchain network (asset platform) that is supported by Ethereum token list standard",
    "5-0": "Exclusive `5m` (5 minutes) and `hourly`  \ninterval params for [/coins/{id}/market_chart](/reference/coins_id_market_chart)",
    "5-1": "Get the historical chart data of a coin including time in UNIX, price, market cap and 24hr volume based on particular coin ID",
    "6-0": "Exclusive `5m` (5 minutes) and `hourly`  \ninterval params for [/coins/{id}/market_chart/range](/reference/coins_id_market_chart)",
    "6-1": "Get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hr volume based on particular coin ID"
  },
  "cols": 2,
  "rows": 7,
  "align": [
    "left",
    "left"
  ]
}
[/block]
---
title: Exchange Data by ID
excerpt: >-
  This endpoint allows you to **query exchange’s data (name, year established,
  country, ...), exchange volume in BTC and top 100 tickers based on exchange’s
  ID**
api:
  file: coingecko-public-api-v3.json
  operationId: exchanges-id
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
> - The exchange volume in the response is provided in BTC. To convert it to other currencies, please use [/exchange_rates](/reference/exchange-rates) endpoint.
> - For derivatives (e.g. bitmex, binance_futures), to get derivatives exchanges data, please go to [/derivatives/exchange/{id}](/reference/derivatives-exchanges-id) endpoint.
> - Tickers are limited to 100 items, to get more tickers, please go to [/exchanges/{id}/tickers](/reference/exchanges-id-tickers) endpoint.
> - Cache / Update Frequency: every 60 seconds for all the API plans.
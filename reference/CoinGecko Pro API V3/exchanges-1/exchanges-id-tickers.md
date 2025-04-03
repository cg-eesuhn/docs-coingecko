---
title: Exchange Tickers by ID
excerpt: >-
  This endpoint allows you to **query exchange's tickers based on exchange’s
  ID**
api:
  file: coingecko-pro-api-v3.json
  operationId: exchanges-id-tickers
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
> - Responses are paginated and limited to 100 tickers per page. You may specify the page number using the `page` params to retrieve the tickers accordingly.
> - `order=base_target` sorts tickers by `base` symbol, then `target` symbol, in lexicographical order (`0 -> 9`, followed by `a -> z`).  
>   This sorting method ensures stable pagination results, minimizing cases where cached responses might otherwise cause duplicate or missing tickers across paginated pages.
> - Cache / Update Frequency: every 60 seconds for all the API plans.
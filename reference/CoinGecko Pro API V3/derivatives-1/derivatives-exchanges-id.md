---
title: Derivatives Exchange Data by ID
excerpt: >-
  This endpoint allows you to **query the derivatives exchange’s related data
  (ID, name, open interest, ...) based on the exchanges’ ID**
api:
  file: coingecko-pro-api-v3.json
  operationId: derivatives-exchanges-id
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍 **Tips**
> 
> - For `include_tickers` param, you may change the value to either `all` to include all the tickers or `unexpired` to include unexpired tickers in the responses. You may leave it blank to omit the tickers data.

> 📘 **Notes**
> 
> - Cache / Update Frequency: every 30 seconds for all the API plans.
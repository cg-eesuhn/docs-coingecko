---
title: Exchange Volume Chart by ID
excerpt: >-
  This endpoint allows you to **query the historical volume chart data with time
  in UNIX and trading volume data in BTC based on exchange’s ID**
api:
  file: coingecko-pro-api-v3.json
  operationId: exchanges-id-volume-chart
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
> * You can use this endpoint to query the historical volume chart data of **derivatives exchanges** as well.
> * The exchange volume in the response is provided in BTC. To convert it to other currencies, please use [/exchange\_rates](/reference/exchange-rates) endpoint.
> * Data granularity is automatic (cannot be adjusted):
>   * 1 day = 10-minutely
>   * 7, 14 days = hourly
>   * 30 days & above = daily
> * Cache / Update Frequency: every 60 seconds for all the API plans.

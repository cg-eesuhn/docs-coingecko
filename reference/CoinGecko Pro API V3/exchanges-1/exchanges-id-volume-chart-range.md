---
title: 💼 Exchange Volume Chart within Time Range by ID
excerpt: >-
  This endpoint allows you to **query the historical volume chart data in BTC by
  specifying date range in UNIX based on exchange’s ID**
api:
  file: coingecko-pro-api-v3.json
  operationId: exchanges-id-volume-chart-range
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
> * You can query the historical volume chart data of **derivatives exchanges** with this endpoint as well.
> * The data interval for this endpoint is fixed at daily.
> * The date range between `from` and `to` must be within 31 days.
> * Cache/Update Frequency: 5 minutes
> * Exclusive for Paid Plan Subscribers (Analyst, Lite, Pro and Enterprise)

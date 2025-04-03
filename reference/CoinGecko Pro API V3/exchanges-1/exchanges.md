---
title: Exchanges List with data
excerpt: >-
  This endpoint allows you to **query all the supported exchanges with
  exchanges’ data (ID, name, country, ...) that have active trading volumes on
  CoinGecko**
api:
  file: coingecko-pro-api-v3.json
  operationId: exchanges
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
> - You may include values such as `per_page` and `page` to specify how many results you would like to show in the responses per page and which page of responses you would like to show.

> 📘 **Notes**
> 
> - All the exchanges in the responses are the exchanges with active trading volume on CoinGecko, any inactive or deactivated exchanges will be removed from the list.
> - Cache / Update Frequency: every 60 seconds for all the API plans.
---
title: Coin Historical Data by ID
excerpt: >-
  This endpoint allows you to **query the historical data (price, market cap,
  24hrs volume, ...) at a given date for a coin based on a particular coin ID**
api:
  file: coingecko-pro-api-v3.json
  operationId: coins-id-history
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
> - You may obtain the coin ID (API ID) via several ways:
>   - refers to respective coin page and find ‘API ID’.
>   - refers to [`/coins/list`](/reference/coins-list) endpoint.
>   - refers to google sheets [here](https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit?usp=sharing).

> 📘 **Notes**
> 
> - The data returned is at `00:00:00 UTC`
> - The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35).
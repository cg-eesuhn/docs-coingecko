---
title: Coin Price by IDs
excerpt: >-
  This endpoint allows you to **query the prices of one or more coins by using
  their unique Coin API IDs**
api:
  file: coingecko-public-api-v3.json
  operationId: simple-price
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
> * You may obtain the coin ID (API ID) via several ways:
>   * refers to respective coin page and find ‘API ID’.
>   * refers to [`/coins/list`](/reference/coins-list) endpoint.
>   * refers to Google Sheets [here](https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit?usp=sharing).
> * You may flag to include more data such as market cap, 24hr volume, 24hr change, last updated time etc.
> * To verify if a price is stale, you may flag `include_last_updated_at=true` in your request to obtain the latest updated time. Alternatively, you may flag `include_24hr_change=true` to determine if it returns a `null` value.

> 📘 **Notes**
>
> * You may cross-check the price on [CoinGecko](https://www.coingecko.com) and learn more about our price methodology [here](https://www.coingecko.com/en/methodology).
> * Cache/Update Frequency: every 60 seconds for Public API.
>   * Every 20 seconds for [Pro-API](https://www.coingecko.com/en/api/pricing) (Analyst, Lite, Pro, Enterprise).

---
title: Coin OHLC Chart by ID
excerpt: >-
  This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a
  coin based on particular coin ID**
api:
  file: coingecko-pro-api-v3.json
  operationId: coins-id-ohlc
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: >-
    Experiment with /coins/{id}/market_chart endpoint 👇 for better data
    granularity!
  pages:
    - type: endpoint
      slug: coins-id-market-chart
      title: Coin Historical Chart Data by ID
---
> 👍 Tips
> 
> - You may obtain the coin ID (API ID) via several ways:
>   - refers to respective coin page and find ‘API ID’.
>   - refers to [`/coins/list`](/reference/coins-list) endpoint.
>   - refers to Google Sheets [here](https://docs.google.com/spreadsheets/d/1wTTuxXt8n9q7C4NDXqQpI3wpKu1_5bGVmP9Xz0XGSyU/edit?usp=sharing).
> - For historical chart data with better granularity, you may consider using [/coins/{id}/market_chart](/reference/coins-id-market-chart) endpoint.

> 📘 **Notes**
> 
> - The timestamp displayed in the payload (response) indicates the end (or close) time of the OHLC data.
> - Data granularity (candle's body) is automatic:
>   - 1 - 2 days: 30 minutes
>   - 3 - 30 days: 4 hours
>   - 31 days and beyond: 4 days
> - Cache / Update Frequency:  
>   - Every 15 minutes for all the API plans
>   - The last completed UTC day (00:00) is available 35 minutes after midnight on the next UTC day (00:35).
> - Exclusive **daily** and **hourly** candle interval parameter for all paid plan subscribers (`interval = daily`, `interval=hourly`)
>   - '**daily**' interval is available for **1 / 7 / 14 / 30 / 90 / 180** days only.
>   - '**hourly**' interval is available for  **1 / 7 / 14 / 30 / 90** days only.
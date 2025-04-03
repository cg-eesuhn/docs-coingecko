---
title: NFTs List (ID Map)
excerpt: >-
  This endpoint allows you to **query all supported NFTs with ID, contract
  address, name, asset platform ID and symbol on CoinGecko**
api:
  file: coingecko-public-api-v3.json
  operationId: nfts-list
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
> - You may use this endpoint to query the list of NFTs for other endpoints that contain params like `id` (NFT collection’s id) as well as `asset_platform_id` and `contract_address`.
> - You may include values such as `per_page` and `page` to specify how many results you would like to show in the responses per page and which page of responses you would like to show.

> 📘 **Notes**
> 
> - The responses are paginated to 100 items.
> - Cache / Update Frequency: every 5 minutes for all the API plans.
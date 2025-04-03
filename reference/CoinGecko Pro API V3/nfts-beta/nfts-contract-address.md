---
title: NFTs Collection Data by Contract Address
excerpt: >-
  This endpoint allows you to **query all the NFT data (name, floor price, 24hr
  volume ...) based on the NFT collection contract address and respective asset
  platform**
api:
  file: coingecko-pro-api-v3.json
  operationId: nfts-contract-address
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
> * You may also obtain the asset platform ID and contract address through [/nfts/list](/reference/nfts-list) endpoint.

> 📘 **Notes**
>
> * Solana NFT & Art Blocks are not supported for this endpoint, please use [/nfts/\{id}](/reference/nfts-id) endpoint instead.
> * Cache / Update Frequency: every 60 seconds for all the API plans.

---
title: Most Recently Updated Tokens List
excerpt: >-
  This endpoint allows you to **query 100 most recently updated tokens info of a
  specific network or across all networks on GeckoTerminal**
api:
  file: on-chain-dex-api-beta.json
  operationId: tokens-info-recent-updated
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
> * You may add values such as network in the include param to include network along with the updated tokens list.

> 📘 **Notes**
>
> * Attributes specified in the `include` param will be returned under the top-level `"included"` key.
> * Cache/Update frequency: every 30 seconds.
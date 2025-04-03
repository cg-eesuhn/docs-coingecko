---
title: ✍️ Best Practices
excerpt: >-
  Wonder how to use different endpoints together? This is the perfect place for
  you
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## User Journey for CoinGecko API Endpoints

<Image align="center" className="border" border={true} src="https://files.readme.io/60fecdf-image.png" />

### "Discovery/Navigational Endpoints"

**Examples:**

* [/coins/list](/reference/coins-list) — can be used to query all the supported coins on CoinGecko with names, symbols and coin IDs that can be used in other endpoints.
* [/search/trending](/reference/trending-search) — can be used to query trending search coins, categories and NFTs on CoinGecko.

<br />

### "Supporting Endpoints"

**Examples:**

* [/simple/supported\_vs\_currencies](/reference/simple-supported-currencies) — can be used to query the list of currencies for other endpoints that include parameters like `vs_currencies`, allowing to obtain the corresponding data for those currencies.
* [/asset\_platforms](/reference/asset-platforms-list) — can be used to query the list of asset platforms for other endpoints that contain parameters like `id` or `ids` (asset platforms), allowing the retrieval of corresponding data for these asset platforms.

<br />

### "Data Endpoints"

**Examples:**

* [/simple/price](/reference/simple-price) — can be used to query the prices of coins using the unique coin IDs that can be obtained from the "Discovery/Navigational Endpoints" mentioned above.
* [/coins/\{id}](/reference/coins-id) — can be used to query the coin data using the unique coin IDs that can be obtained from the "discovery endpoints" mentioned above.

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
* [/coins/\{id}](/reference/coins-id) — can be used to query the coin data using the unique coin IDs that can be obtained from the "Discovery/Navigational Endpoints" mentioned above.

<br />

## User Journey for Onchain DEX API Endpoints (GeckoTerminal data)

<Image align="center" className="border" border={true} src="https://files.readme.io/fc38fa8-image.png" />

### "Discovery/Navigational Endpoints"

**Examples:**

* [/onchain/trending\_pools](/reference/trending-pools-list) - can be used to query trending pools across all networks on GeckoTerminal.
* [/onchain/search/pools](/reference/search-pools) - can be used to search for any pools on GeckoTerminal.

<br />

### "Supporting Endpoints"

**Examples:**

* [/onchain/networks-list](/reference/networks-list) - can be used to query all the supported networks on GeckoTerminal.
* [/onchain/networks/\{network}/dexes](/reference/dexes-list) - can be used to query all the supported decentralized exchanges (DEXs/`dexes`) on GeckoTerminal based on network id that can be obtained from the endpoint mentioned above.

<br />

### "Data Endpoints"

**Examples:**

* [/onchain/simple/networks/\{network}/token\_price/\{addresses}](/reference/onchain-simple-price) - can be used to query any token price using the token address and network id that can be obtained from the "Discovery/Navigational Endpoints" and "Supporting Endpoints" mentioned above.
* [/onchain/networks/\{network}/pools/\{address}](/reference/pool-address) - can be used to query  the data of a specific pool based on the pool address and network id that can be obtained from the "Discovery/Navigational Endpoints" and "Supporting Endpoints" mentioned above.

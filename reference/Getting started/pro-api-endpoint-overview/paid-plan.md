---
title: 💼 Paid Plan
excerpt: >-
  Exclusive endpoints available for all paid plans: **Analyst, Lite, Pro,
  Enterprise**
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 📘 **Notes**
> 
> - Please be aware that the following endpoints are currently in Beta, and there may be future changes.
> - Your feedback is valuable to us; please share your thoughts with us at [api@coingecko.com](mailto:api@coingecko.com).

| Endpoint                                                                                                                | Description                                                                                                                                                                  |
| :---------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [/coins/list/new](/reference/coins_list_new)                                                                            | Query the latest 200 coins that recently listed on CoinGecko                                                                                                                 |
| [/coins/top_gainers_losers](/reference/coins_top_gainers_losers)                                                        | Query the top 30 coins with largest price gain and loss by a specific time duration                                                                                          |
| [/nfts/markets](/reference/nfts_markets)                                                                                | Query all the supported NFT collections with floor price, market cap, volume and market related data on CoinGecko                                                            |
| [/nfts/{id}/market_chart](/reference/nfts_contract_address_market_chart)                                                | Query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now                                        |
| [/nfts/{asset_platform_id}/contract/   {contract_address}/market_chart](/reference/nfts-contract-address-market-chart)  | Query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now based on the provided contract address |
| [/nfts/{id}/tickers](/reference/nfts_id_tickers)                                                                        | Query the latest floor price and 24hr volume of a NFT collection, on each NFT marketplace, e.g. OpenSea and LooksRare                                                        |
| [/global/market_cap_chart](/reference/global_market_cap_chart)                                                          | Query historical global market cap and volume data by number of days away from now                                                                                           |
| [/exchanges/{id}/volume_chart/range](/reference/exchanges_id_volume_chart_range)                                        | Query the historical volume chart data in BTC by specifying date range in UNIX based on exchange’s ID                                                                        |
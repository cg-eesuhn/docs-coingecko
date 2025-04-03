---
title: 👑 Enterprise Plan
excerpt: Exclusive endpoints available for **Enterprise plan clients only**
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
> * Please be aware that the following endpoints are currently in Beta, and there may be future changes.
> * If you are currently subscribed to our Enterprise plan and do not have access to the endpoints listed below, kindly reach out to us at [api@coingecko.com](mailto:api@coingecko.com).

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Endpoint
      </th>

      <th style={{ textAlign: "left" }}>
        Description
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        [/coins/\{id}/circulating\_supply\_chart](/reference/coins_id_circulating_supply_chart)
      </td>

      <td style={{ textAlign: "left" }}>
        Query historical circulating supply of a coin by number of days away from now based on provided coin ID
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        [/coins/\{id}/circulating\_supply\_chart/range](/reference/coins_id_circulating_supply_chart_range)
      </td>

      <td style={{ textAlign: "left" }}>
        Query historical circulating supply of a coin, within a range of timestamp based on the provided coin ID
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        [/coins/\{id}/total\_supply\_chart](/reference/coins_id_total_supply_chart)
      </td>

      <td style={{ textAlign: "left" }}>
        Query historical total supply of a coin by number of days away from now based on provided coin ID
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        [/coins/\{id}/total\_supply\_chart/range](/reference/coins_id_total_supply_chart_range)
      </td>

      <td style={{ textAlign: "left" }}>
        Query historical total supply of a coin, within a range of timestamp based on the provided coin ID
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        [/token\_lists/\{asset\_platform\_id}/all.json](/reference/token_lists_asset_platform_id)
      </td>

      <td style={{ textAlign: "left" }}>
        Get full list of tokens of a blockchain network (asset platform) that is supported by Ethereum token list standard
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Exclusive `5m` (5 minutes) and `hourly`\
        interval params for [/coins/\{id}/market\_chart](/reference/coins_id_market_chart)
      </td>

      <td style={{ textAlign: "left" }}>
        Get the historical chart data of a coin including time in UNIX, price, market cap and 24hr volume based on particular coin ID
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Exclusive `5m` (5 minutes) and `hourly`\
        interval params for [/coins/\{id}/market\_chart/range](/reference/coins_id_market_chart)
      </td>

      <td style={{ textAlign: "left" }}>
        Get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hr volume based on particular coin ID
      </td>
    </tr>
  </tbody>
</Table>

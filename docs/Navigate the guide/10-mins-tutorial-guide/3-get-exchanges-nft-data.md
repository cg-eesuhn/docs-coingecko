---
title: 3. Get Exchanges & NFT Data
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
You can get Exchange and NFT data just like how you get the coins data:

1. Get the ID (exchange or NFT) from `/list` endpoint.
2. Use the ID to query latest or historical market data:

<Table align={["left","left","left","left","left"]}>
  <thead>
    <tr>
      <th style={{ textAlign: "left" }}>
        Type                    
      </th>

      <th style={{ textAlign: "left" }}>
        Coins
      </th>

      <th style={{ textAlign: "left" }}>
        NFTs
      </th>

      <th style={{ textAlign: "left" }}>
        Exchanges
      </th>

      <th style={{ textAlign: "left" }}>
        Derivatives
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ textAlign: "left" }}>
        Get Full List with IDs
      </td>

      <td style={{ textAlign: "left" }}>
        [/coins/list](/reference/coins-list)
      </td>

      <td style={{ textAlign: "left" }}>
        [/nfts/list](/reference/nfts-list)
      </td>

      <td style={{ textAlign: "left" }}>
        [/exchanges/list](/reference/exchanges-list)
      </td>

      <td style={{ textAlign: "left" }}>
        [/derivatives/exchanges/list](/reference/derivatives-exchanges-list)
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get latest market data
      </td>

      <td style={{ textAlign: "left" }}>
        [/coins/\{id}](/reference/coins-id)
      </td>

      <td style={{ textAlign: "left" }}>
        [/nfts/\{id}](/reference/nfts-id)
      </td>

      <td style={{ textAlign: "left" }}>
        [/exchanges/\{id}](/reference/exchanges-id)
      </td>

      <td style={{ textAlign: "left" }}>
        [/derivatives/exchanges/\{id}](/reference/derivatives-exchanges-id)
      </td>
    </tr>

    <tr>
      <td style={{ textAlign: "left" }}>
        Get Historical Data
      </td>

      <td style={{ textAlign: "left" }}>
        [/coins/\{id}/market\_chart](/reference/coins-id-market-chart)
      </td>

      <td style={{ textAlign: "left" }}>
        `/nfts/{id}/market_chart`\
        (Exclusive for Paid Plan Subscribers)
      </td>

      <td style={{ textAlign: "left" }}>
        [/exchanges/\{id}/volume\_chart](/reference/exchanges-id-volume-chart) 
      </td>

      <td style={{ textAlign: "left" }}>
        [/exchanges/\{id}/volume\_chart](/reference/exchanges-id-volume-chart)
      </td>
    </tr>
  </tbody>
</Table>

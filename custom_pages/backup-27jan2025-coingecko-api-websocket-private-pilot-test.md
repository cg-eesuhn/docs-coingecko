---
title: '[Backup: 27Jan2025] CoinGecko API - Websocket (Private Pilot Test)'
fullscreen: false
hidden: true
metadata:
  title: ''
  description: ''
---
Thank you for joining CoinGecko API Websocket private pilot test!

Please share your feedback or question directly with [soonaik@coingecko.com](mailto:soonaik@coingecko.com) or <https://t.me/soonegg91>

**Pre-Requisite: **you need to have an active Pro-API key and Websocket access enabled by CoinGecko team. 

Kindly contact the CoinGecko team to confirm your maximum limits for **socket connections** and **subscriptions per socket**.

**Current limitation: ** (as of January 22, 2025)

- Subscription events are limited to one token per request.
- Payload response contain `identifier` data: 

```json response (beautified)
{
  "identifier": {
    "channel": "OnchainSimpleTokenPrice",
    "network_id:token_addresses": [
      "bsc:0x55d398326f99059ff775485246999027b3197955"
    ]
  },
  "message": "G1,bsc,0x55d398326f99059ff775485246999027b3197955,0.999457718373347,-0.009028866490825653,0.0,1476864199.38384,1737427063"
}
```

**[🚧 To be updated] **_We have provided a script below to help you make multiple individual queries and to parse only the message data._

**Upcoming improvements: **

- Subscription events will support multiple tokens (in array format) per request.
- The payload response will no longer include `identifier` data and will instead return in a simplified CSV format. 

```csharp response
G1,eth,0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2,3639.78228844745,3.566,123,31233333.33,1709542750
```

***

# Get started here!

**Websocket URL**:

```json
wss://stream.coingecko.com/v1?x_cg_pro_api_key=CG-YOUR_KEY
```

| Websocket Channel (Path)   | Channel Code | Details                                                                                                                 |
| :------------------------- | :----------- | :---------------------------------------------------------------------------------------------------------------------- |
| onchain_simple_token_price | G1           | Subscribe to receive real-time price updates for tokens, as seen on [GeckoTerminal.com](https://www.geckoterminal.com/) |
| {TBC}                      | G2           | {TBC}                                                                                                                   |
| {TBC}                      | C1           | {TBC}                                                                                                                   |

**Notes:**

- **Real-Time Data: **Once subscribed, you will start receiving real-time data updates based on your subscriptions. The received data will be in CSV format and will contain the relevant information for the subscribed event.
- **Close Connection:** When you're done receiving updates or want to close the WebSocket connection, you can gracefully close the connection.
- **Security Considerations:** Ensure that you keep your Pro-API key secure and do not expose it publicly in your code or any public repositories.

## Channel #G1: onchain_simple_token_price

This channel allows you to subscribe to real-time updates of price changes for token.

### # 1 Establish Connection to Websocket

```json wss
wss://stream.coingecko.com/v1?x_cg_pro_api_key=YOUR_KEY

OR
 
wss://stream.coingecko.com/v1/onchain_simple_token_price
x-cg-pro-api-key: YOUR_KEY
```

### # 2 Subscribe to a channel and stream onchain simple price data

Input Example:

```json .
{ "identifier": { "channel": "OnchainSimpleTokenPrice", "network_id:token_addresses": [ "bsc:0x55d398326f99059ff775485246999027b3197955" ] }, "command": "subscribe" }
```

Output Example:

```json Payload
{
"code":2000, 
"message":"Subscription successful"
}
```

Output Example:

```json response
{
  "identifier": {
    "channel": "OnchainSimpleTokenPrice",
    "network_id:token_addresses": [
      "bsc:0x55d398326f99059ff775485246999027b3197955"
    ]
  },
  "message": "G1,bsc,0x55d398326f99059ff775485246999027b3197955,0.999457718373347,-0.009028866490825653,0.0,1476864199.38384,1737427063"
}
```

### Payload Format

The "message" data received from the websocket is a comma-separated string. Each value in the payload corresponds to a specific field in the following order:

```json .
channel_type,network_id,token_address,usd_price,usd_price_24h_change_percentage,usd_market_cap,usd_24h_vol,last_updated_at
```

Delimiter: `,`

- Each field in the payload is separated by a comma.
- Ensure you parse the payload correctly to extract individual values.

### Payload Fields

| **Field**                       | **Type** | **Description**                                                                                                            | **Example**                                |
| ------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| channel_type                    | string   | Indicates the type of channel subscribed to.                                                                               | G1                                         |
| network_id                      | string   | Identifier of the blockchain network. Check full list of ids [here](https://api.geckoterminal.com/api/v2/networks?page=1). | eth                                        |
| token_address                   | string   | Contract address of the token on the blockchain.                                                                           | 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2 |
| usd_price                       | float    | Current token price in USD.                                                                                                | 3639.78228844745                           |
| usd_price_24h_change_percentage | float    | Percentage change in token price over the last 24 hours.                                                                   | 3.566                                      |
| usd_market_cap                  | float    | Market capitalization in USD.                                                                                              | 123                                        |
| usd_24h_vol                     | float    | 24-hour trading volume in USD.                                                                                             | 31233333.33                                |
| last_updated_at                 | integer  | Timestamp of the last data update in Unix time.                                                                            | 1709542750                                 |

Tips: The Websocket payload will use the value `null` when specific data is unavailable. Ensure your application is capable of handling null values for fields that may not always have data. Refer to 'Parsing Example' at the bottom for implementation tips.

### # 3 Un-subscribe to stream onchain simple price data

Input Example:

```json .
{ "identifier": { "channel": "OnchainSimpleTokenPrice", "network_id:token_addresses": [ "bsc:0x55d398326f99059ff775485246999027b3197955" ] }, "command": "unsubscribe" }
```

Output Example:

```json Payload
{
"code":2000, 
"message":"Unsubscription successful"
}
```

***

## Parsing Example  (_Please ignore this for now_)

If you are processing the payload programmatically, you can split the string by commas to extract the values:

**Python Example**:

```python
payload = "G1,eth,0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2,null,null,123,31233333.33,null"
fields = payload.split(',')

data = {
    "channel_type": fields[0],
    "network_id": fields[1],
    "token_address": fields[2],
    "usd_price": None if fields[3] == "null" else float(fields[3]),
    "usd_price_24h_change_percentage": None if fields[4] == "null" else float(fields[4]),
    "usd_market_cap": None if fields[5] == "null" else float(fields[5]),
    "usd_24h_vol": None if fields[6] == "null" else float(fields[6]),
    "last_updated_at": None if fields[7] == "null" else int(fields[7])
}

# Example usage
if data["usd_price"] is None:
    print("USD Price is unavailable.")
else:
    print("USD Price:", data["usd_price"])

if data["usd_24h_vol"] is None:
    print("24h Volume is unavailable.")
else:
    print("24h Volume:", data["usd_24h_vol"])

print("Parsed Data:", data)

```

**Node.js Example:**

```node
const payload = "G1,eth,0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2,null,null,123,31233333.33,null";
const fields = payload.split(',');

const data = {
    channel_type: fields[0],
    network_id: fields[1],
    token_address: fields[2],
    usd_price: fields[3] === "null" ? null : parseFloat(fields[3]),
    usd_price_24h_change_percentage: fields[4] === "null" ? null : parseFloat(fields[4]),
    usd_market_cap: fields[5] === "null" ? null : parseFloat(fields[5]),
    usd_24h_vol: fields[6] === "null" ? null : parseFloat(fields[6]),
    last_updated_at: fields[7] === "null" ? null : parseInt(fields[7], 10),
};

// Example usage
if (data.usd_price === null) {
    console.log("USD Price is unavailable.");
} else {
    console.log("USD Price:", data.usd_price);
}

if (data.usd_24h_vol === null) {
    console.log("24h Volume is unavailable.");
} else {
    console.log("24h Volume:", data.usd_24h_vol);

console.log("Parsed Data:", data);
}

```
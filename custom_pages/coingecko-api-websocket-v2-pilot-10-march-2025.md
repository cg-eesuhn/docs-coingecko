---
title: CoinGecko API - Websocket v2 Pilot (10 March 2025)
fullscreen: false
hidden: true
metadata:
  title: ''
  description: ''
---
Thank you for joining CoinGecko API Websocket private pilot test!

Please share your feedback or question directly with [soonaik@coingecko.com](mailto:soonaik@coingecko.com) or <https://t.me/soonegg91>

Pre-Requisite: you need to have an active Pro-API key and Websocket access enabled by CoinGecko team.

Kindly contact the CoinGecko team to confirm your maximum limits for socket connections and subscriptions per socket.

***

# Get started here!

**Websocket URL**:

```
wss://stream.coingecko.com/v1?x_cg_pro_api_key=CG-YOUR_KEY
```

<br />

| Websocket Channel (Path) | Channel Code | Details                                                                               |
| :----------------------- | :----------- | :------------------------------------------------------------------------------------ |
| OnchainSimpleTokenPrice  | G1           | Subscribe to receive real-time price updates for tokens, as seen on GeckoTerminal.com |
| {TBC}                    | G2           | {TBC}                                                                                 |

Notes:

- Real-Time Data: Once subscribed, you will start receiving real-time data updates based on your subscriptions. The received data will be in JSON format and will contain the relevant information for the subscribed event.
- Close Connection: When you're done receiving updates or want to close the WebSocket connection, you can gracefully close the connection.
- Security Considerations: Ensure that you keep your Pro-API key secure and do not expose it publicly in your code or any public repositories.

<br />

# Channel #G1: OnchainSimpleTokenPrice

This channel allows you to subscribe to real-time updates of price changes for token.

## 1 Establish Connection to Websocket

```Text wss
wss://stream.coingecko.com/v1?x_cg_pro_api_key=YOUR_KEY

OR

wss://stream.coingecko.com/v1  
x-cg-pro-api-key: YOUR_KEY
```

<br />

## 2 Subscribe to a specific channel - OnchainSimpleTokenPrice

**Input Example:**

```Text Stringified JSON
{"command":"subscribe","identifier":"{\"channel\":\"OnchainSimpleTokenPrice\"}"}
```

**Output Example**:

```Text Payload
{"type":"confirm_subscription","identifier":"{\"channel\":\"OnchainSimpleTokenPrice\"}"}
```

<br />

## 3 Stream OnchainSimpleTokenPrice data

**Input Example:**

```json Stringified JSON
{"command":"message","identifier":"{\"channel\":\"OnchainSimpleTokenPrice\"}","data":"{\"network_id:token_addresses\":[\"bsc:0x55d398326f99059ff775485246999027b3197955\"],\"action\":\"set_tokens\"}"}
```

**Output Example**:

```json Payload
{
  "code": 2000,
  "message": "Subscription successful for bsc:0x55d398326f99059ff775485246999027b3197955"
}
```

**Output Example**:

```Text Payload
{
  "c": "G1",
  "n": "berachain-bartio",
  "ta": "0x7507c1dc16935b82698e4c63f2746a2fcf994df8",
  "p": 0.999457718373347,
  "pp": -0.009028866490825653,
  "m": 1317802988326.25,
  "v": 1476864199.38384,
  "t": 1737427063
}
```

The output keys may will be in random order.

### Payload Fields

| #  | Field                           | Type    | Description                                                                                                                | Example                                    |
| :- | :------------------------------ | :------ | :------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------- |
| c  | channel_type                    | string  | Indicates the type of channel subscribed to.                                                                               | G1                                         |
| n  | network_id                      | string  | Identifier of the blockchain network. Check full list of ids [here](https://api.geckoterminal.com/api/v2/networks?page=1). | eth                                        |
| ta | token_address                   | string  | Contract address of the token on the blockchain.                                                                           | 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2 |
| p  | usd_price                       | float   | Current token price in USD.                                                                                                | 3639.78228844745                           |
| pp | usd_price_24h_change_percentage | float   | Percentage change in token price over the last 24 hours.                                                                   | 3.566                                      |
| m  | usd_market_cap                  | float   | Market capitalization in USD.                                                                                              | 123                                        |
| v  | usd_24h_vol                     | float   | 24-hour trading volume in USD.                                                                                             | 31233333.33                                |
| t  | last_updated_at                 | integer | Timestamp of the last data update in Unix time.                                                                            | 1709542750                                 |

Tips: The Websocket payload will use the value `null` when specific data is unavailable. Ensure your application is capable of handling null values for fields that may not always have data. 

<br />

### # 3 Un-subscribe to stop streaming OnchainSimpleTokenPrice data

**Input Example:**

Unsubscribe for 1 specific token data:

```json Stringified JSON
{"command":"message","identifier":"{\"channel\":\"OnchainSimpleTokenPrice\"}","data":"{\"network_id:token_addresses\":[\"bsc:0x55d398326f99059ff775485246999027b3197955\"],\"action\":\"unset_tokens\"}"}
```

**Output Example**:

```json Payload
{
  "code":2000,
  "message":"Unsubscription is successful for bsc:0x55d398326f99059ff775485246999027b3197955"
}
```

Unsubscribe from OnchainSimpleTokenPrice channel and all token data:

```Text Payload
{"command":"unsubscribe","identifier":"{\"channel\":\"OnchainSimpleTokenPrice\"}"}
```

**Output Example**:

```Text Payload
{
  "code":2000,
  "message":"Unsubscription is successful for all tokens"
}
```

<br />

***

## Other code example:

Subscribe and unsubscribe to 2 tokens at once:

```Text Stringified JSON
//Subscribe to Channel
{"command":"subscribe","identifier":"{\"channel\":\"OnchainSimpleTokenPrice\"}"}

//Subscribe to stream data of 2 tokens
{"command":"message","identifier":"{\"channel\":\"OnchainSimpleTokenPrice\"}","data":"{\"network_id:token_addresses\":[\"bsc:0x55d398326f99059ff775485246999027b3197955\",\"eth:0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2\"],\"action\":\"set_tokens\"}"}

//UnSubscribe to stop streaming data of 2 tokens
{"command":"message","identifier":"{\"channel\":\"OnchainSimpleTokenPrice\"}","data":"{\"network_id:token_addresses\":[\"bsc:0x55d398326f99059ff775485246999027b3197955\",\"eth:0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2\"],\"action\":\"unset_tokens\"}"}
```

<br />

Subscribe to 2 tokens, and unsubscribe to one of them:

```Text Stringified JSON
//Subscribe to Channel
{"command":"subscribe","identifier":"{\"channel\":\"OnchainSimpleTokenPrice\"}"}

//Subscribe to stream data of 2 tokens
{"command":"message","identifier":"{\"channel\":\"OnchainSimpleTokenPrice\"}","data":"{\"network_id:token_addresses\":[\"bsc:0x55d398326f99059ff775485246999027b3197955\",\"eth:0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2\"],\"action\":\"set_tokens\"}"}

//UnSubscribe to stop streaming data of 1 token
{"command":"message","identifier":"{\"channel\":\"OnchainSimpleTokenPrice\"}","data":"{\"network_id:token_addresses\":[\"eth:0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2\"],\"action\":\"unset_tokens\"}"}
```
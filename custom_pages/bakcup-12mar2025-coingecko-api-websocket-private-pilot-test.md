---
title: '[Backup: 12Mar2025] CoinGecko API - Websocket (Private Pilot Test)'
fullscreen: false
hidden: true
metadata:
  title: ''
  description: ''
---
Thank you for joining CoinGecko API Websocket private pilot test!

Please share your feedback or question directly with [soonaik@coingecko.com](mailto:soonaik@coingecko.com) or [https://t.me/soonegg91](https://t.me/soonegg91)

**Pre-Requisite:** you need to have an active Pro-API key and Websocket access enabled by CoinGecko team. 

Kindly contact the CoinGecko team to confirm your maximum limits for **socket connections** and **subscriptions per socket**.

**Current limitation:** (as of January 27, 2025)

* Subscription events are limited to one token per request.
* Payload response contain `identifier` data: 

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

We have provided a script at the bottom section to help you make multiple individual queries and to parse only the message data.

**Upcoming improvements:**

* Subscription events will support multiple tokens (in array format) per request.
* The payload response will be reduced and exclude `identifier` data.

```csharp response
G1,eth,0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2,3639.78228844745,3.566,123,31233333.33,1709542750
```

***

# Get started here!

**Websocket URL**:

```json
wss://stream.coingecko.com/v1?x_cg_pro_api_key=CG-YOUR_KEY
```

| Websocket Channel (Path) | Channel Code | Details                                                                                                                 |
| :----------------------- | :----------- | :---------------------------------------------------------------------------------------------------------------------- |
| OnchainSimpleTokenPrice  | G1           | Subscribe to receive real-time price updates for tokens, as seen on [GeckoTerminal.com](https://www.geckoterminal.com/) |
| \{TBC}                   | G2           | \{TBC}                                                                                                                  |
| \{TBC}                   | C1           | \{TBC}                                                                                                                  |

**Notes:**

* **Real-Time Data:** Once subscribed, you will start receiving real-time data updates based on your subscriptions. The received data will be in CSV format and will contain the relevant information for the subscribed event.
* **Close Connection:** When you're done receiving updates or want to close the WebSocket connection, you can gracefully close the connection.
* **Security Considerations:** Ensure that you keep your Pro-API key secure and do not expose it publicly in your code or any public repositories.

## Channel #G1: onchain\_simple\_token\_price

This channel allows you to subscribe to real-time updates of price changes for token.

### # 1 Establish Connection to Websocket

```json wss
wss://stream.coingecko.com/v1?x_cg_pro_api_key=YOUR_KEY

OR
 
wss://stream.coingecko.com/v1
x-cg-pro-api-key: YOUR_KEY
```

### # 2 Subscribe to a channel and stream onchain simple price data

Input Example:

```json Stringified JSON
{ "identifier": "{\"channel\": \"OnchainSimpleTokenPrice\", \"network_id:token_addresses\": [ \"base:0xacfe6019ed1a7dc6f7b508c02d1b04ec88cc21bf\"]}","command": "subscribe"}
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

* Each field in the payload is separated by a comma.
* Ensure you parse the payload correctly to extract individual values.

### Payload Fields

| **Field**                           | **Type** | **Description**                                                                                                            | **Example**                                |
| ----------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| channel\_type                       | string   | Indicates the type of channel subscribed to.                                                                               | G1                                         |
| network\_id                         | string   | Identifier of the blockchain network. Check full list of ids [here](https://api.geckoterminal.com/api/v2/networks?page=1). | eth                                        |
| token\_address                      | string   | Contract address of the token on the blockchain.                                                                           | 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2 |
| usd\_price                          | float    | Current token price in USD.                                                                                                | 3639.78228844745                           |
| usd\_price\_24h\_change\_percentage | float    | Percentage change in token price over the last 24 hours.                                                                   | 3.566                                      |
| usd\_market\_cap                    | float    | Market capitalization in USD.                                                                                              | 123                                        |
| usd\_24h\_vol                       | float    | 24-hour trading volume in USD.                                                                                             | 31233333.33                                |
| last\_updated\_at                   | integer  | Timestamp of the last data update in Unix time.                                                                            | 1709542750                                 |

Tips: The Websocket payload will use the value `null` when specific data is unavailable. Ensure your application is capable of handling null values for fields that may not always have data. 

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

## Code Example:

Make multiple individual queries and to parse only the message data.

```python
import asyncio
import websockets
import json
import time

class WebSocketClient:
    def __init__(self):
        # Your CoinGecko Pro API key
        # Replace this with your actual API key from https://www.coingecko.com/en/developers/dashboard
        self.api_key = "YOUR_KEY"
        
        # WebSocket URL with API key
        self.url = f"wss://stream.coingecko.com/v1?x_cg_pro_api_key={self.api_key}"
        self.shutdown_flag = False
        
        # Add your token subscriptions here
        # Format: "network_id:token_address"
        # Example networks: bsc (Binance Smart Chain), ethereum, polygon, etc.
        # Example:
        # - "bsc:0x55d398326f99059ff775485246999027b3197955" (USDT on BSC)
        # - "ethereum:0xdac17f958d2ee523a2206206994597c13d831ec7" (USDT on Ethereum)
        self.subscription_list = [
            "bsc:0x55d398326f99059ff775485246999027b3197955",
            "berachain-bartio:0x7507c1dc16935b82698e4c63f2746a2fcf994df8",
            "bsc:0x9840652dc04fb9db2c43853633f0f62be6f00f98"
        ]

    async def subscribe_to_token(self, websocket, token_address):
        """Helper function to subscribe to a single token"""
        subscribe_message = {
            "identifier": json.dumps({
                "channel": "OnchainSimpleTokenPrice",
                "network_id:token_addresses": [token_address]
            }),
            "command": "subscribe"
        }
        await websocket.send(json.dumps(subscribe_message))
        print(f"Sent subscription for {token_address}")

    async def connect_to_websocket(self):
        retry_attempts = 5
        retry_delay = 3

        for attempt in range(retry_attempts):
            if self.shutdown_flag:
                print("Shutdown requested, stopping connection attempts...")
                break

            try:
                async with websockets.connect(self.url) as websocket:
                    print("Connection established")
                    welcome_msg = await websocket.recv()
                    print(f"Welcome message: {welcome_msg}")

                    # Subscribe to all tokens in the subscription list
                    for token_address in self.subscription_list:
                        await self.subscribe_to_token(websocket, token_address)
                        await asyncio.sleep(0.5)  # Small delay between subscriptions

                    while not self.shutdown_flag:
                        try:
                            response = await websocket.recv()
                            message_data = json.loads(response)
                            
                            if message_data.get("type") == "ping":
                                print(response)
                            elif 'message' in message_data:
                                print(message_data['message'])
                            
                            await asyncio.sleep(1)
                        except asyncio.CancelledError:
                            print("Received cancellation signal...")
                            self.shutdown_flag = True
                            break
                        except websockets.exceptions.ConnectionClosed:
                            print("Connection closed unexpectedly")
                            break

                    if self.shutdown_flag:
                        print("Closing connection gracefully...")
                        break

            except (websockets.exceptions.InvalidStatus, 
                    websockets.exceptions.ConnectionClosedError) as e:
                if self.shutdown_flag:
                    break
                    
                print(f"Error occurred (attempt {attempt + 1}/{retry_attempts}): {e}")
                if attempt < retry_attempts - 1:
                    print(f"Retrying in {retry_delay} seconds...")
                    await asyncio.sleep(retry_delay)
                else:
                    print("Max retries reached. Exiting.")
                    break

    def shutdown(self):
        self.shutdown_flag = True

async def main():
    client = WebSocketClient()
    try:
        await client.connect_to_websocket()
    except KeyboardInterrupt:
        print("\nKeyboard interrupt received...")
    finally:
        client.shutdown()
        print("Cleanup complete. Exiting...")

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\nApplication shutdown complete.")
```
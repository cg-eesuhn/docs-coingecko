---
title: 4. Get On-Chain Data
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
Here are some of the important parameters to take note while using On-Chain DEX API Endpoints: 

- Blockchain Networks
- DEXs
- Pool Contract Address
- Token Contract Address

<br />

## Blockchain Networks

> 📘 Notes
> 
> - Please do not use CoinGecko Asset Platform ID as the Network ID in On-Chain DEX API Endpoints (CoinGecko Asset Platform ID ≠ GT Network ID)
> - Example:
>   - Asset Platform on CoinGecko: `ethereum`
>   - On-Chain Network ID: `eth`

**How to obtain Network ID?**

- Use [/onchain/networks](/reference/networks-list) endpoint.  
  Example of responses:

  ```json
  {
    "data": [
      {
        "id": "eth",  👈 Network ID
        "type": "network",
        "attributes": {
          "name": "Ethereum",
          "coingecko_asset_platform_id": "ethereum" 👈 CoinGecko Asset Platform ID
        }
      },
     ......
    ]
  }
  ```
- Go to [GeckoTerminal](https://www.geckoterminal.com/)

  [1]  Select or search for a blockchain network.

  [2]  Copy the slug from the URL:

  ![](https://files.readme.io/5b9a903-image.png)

<br />

## DEXs

Some of the pools endpoints require you to provide DEX ID along with Network ID to query the pools on a particular DEX (Decentralized Exchange).

Using [/onchain/networks/{network}/dexes/{dex}/pools](/reference/top-pools-dex) as example:

`https://pro-api.coingecko.com/api/v3/onchain/networks/eth/dexes/uniswap_v3/pools?x_cg_pro_api_key=YOUR_API_KEY`

There are 2 parameter values required to apply for this endpoint:

- network: `eth` (network ID)
- dex: `uniswap_v3` (dex ID)

**How to obtain DEX ID?**

- Use [/onchain/networks/{network}/dexes](/reference/dexes-list) endpoint.  
  Example of responses:
  ```json
  {
    "data": [
      {
        "id": "uniswap_v2", 👈 DEX ID
        "type": "dex",
        "attributes": {
          "name": "Uniswap V2"
        }
      },
    ......
    ]
  }
  ```
- Go to [GeckoTerminal](https://www.geckoterminal.com/)

  [1]  Select or search for a blockchain network.

  [2]  Choose the DEX from the DEXs List on the top (e.g. Uniswap V3).

  [3]  Copy the slug from the URL:

  ![](https://files.readme.io/f68325c-image.png)

<br />

## Methods to query On-Chain Data

### a. Pool Contract Address

Most of the time, you will need a pool contract address along with Network ID to query the on-chain data, especially when using the Pools Endpoints.

Using [/onchain/networks/{network}/pools/{address}](/reference/pool-address) as example:

`https://pro-api.coingecko.com/api/v3/onchain/networks/eth/pools/0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc?x_cg_pro_api_key=YOUR_API_KEY`

There are 2 parameter values required to apply for this endpoint:

- network: `eth` (network ID)
- address: `0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc` (pool contract address)

**How to obtain the pool contract address? (e.g. `WETH/USDC`)**

- Look for the contract address section of pool page on [GeckoTerminal](https://www.geckoterminal.com/eth/pools/0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640):

  [block:image]{"images":[{"image":["https://files.readme.io/741fbc7-image.png",null,""],"align":"center","border":true}]}[/block]

- Get the pool contract address from the project website, white-paper, documentation, or block explorer site:
  - [Block Explorer (Etherscan)](https://etherscan.io/address/0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640)
  - [DEX (Uniswap)](https://info.uniswap.org/#/pools/0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640)

### b. Token Contract Address

Apart from the pool contract address, you also have the option to query on-chain data by using the token contract address, using [/onchain/networks/{network}/tokens/{token_address}/pools](/reference/top-pools-contract-address) as example:

`https://pro-api.coingecko.com/api/v3/onchain/networks/eth/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/pools?x_cg_pro_api_key=YOUR_API_KEY`

There are 2 parameter values required to apply for this endpoint:

- network: `eth` (network ID)
- address: `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48` (token contract address)

**How to obtain tokens contract address (e.g. UNI):**

- Look for the contract address section of pool page on GeckoTerminal:

  ![](https://files.readme.io/56f6c15-image.png)

- Get the token contract address from the project website, white-paper, documentation, or block explorer site. For example:
  - [Uniswap Documentation](https://docs.uniswap.org/protocol/concepts/governance/overview#uni-address)
  - [DEX (Uniswap)](https://info.uniswap.org/#/tokens/tokens/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984)
  - [Block Explorer (Etherscan)](https://etherscan.io/token/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984)
---
title: 🔓 Authentication (Public/Demo)
excerpt: Authentication method for CoinGecko Public API (Demo plan users)
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 📘 **Notes**
>
> * Demo API Key is only available for CoinGecko Public Demo API Plan, the root URL for CoinGecko Public Demo API must be `https://api.coingecko.com/api/v3/`.
> * ⚠️ You are recommended to store the API key securely in your own backend and use a proxy to insert the key into the request URL.
> * The authentication method below is for CoinGecko Public Demo API only. For **paid plan users with Pro-API key**, please refer to [this page](https://docs.coingecko.com/v3.1.1/reference/authentication) instead. 
> * User Guide: [How to sign up for CoinGecko Demo API and generate an API key?](https://support.coingecko.com/hc/en-us/articles/21880397454233)
> * It's highly recommended to use the **Headers method** when making API requests for better security. Using query string parameters can risk exposing your API key.

<br />

## CoinGecko API Authentication Method

If this is your first time using the Demo API key, you can supply API Key to the root URL using one of these ways:

1. Header (Recommended): `x-cg-demo-api-key`
2. Query String Parameter: `x_cg_demo_api_key`

| Authentication Method  | Example using [Ping](/reference/ping-server) Endpoint                                      |
| :--------------------- | :----------------------------------------------------------------------------------------- |
| Header (cURL)          | `curl -X GET "https://api.coingecko.com/api/v3/ping" -H "x-cg-demo-api-key: YOUR_API_KEY"` |
| Query String Parameter | `https://api.coingecko.com/api/v3/ping?x_cg_demo_api_key=YOUR_API_KEY`                     |

<br />

## API Key Usage Credits

* Each request made to any endpoint counts as a single call (1 call = 1 credit).
* Your monthly credit & rate limit are determined by the paid plan to which you subscribe. For more details, please refer to this [page](https://www.coingecko.com/en/api/pricing).
* To check the API usage, please go to the [developer dashboard](https://www.coingecko.com/en/developers/dashboard) or follow the guide [here](/reference/setting-up-your-api-key#4-api-usage-report).

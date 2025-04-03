---
title: 🔑 Setting Up Your API Key
excerpt: >-
  👋 _New to CoinGecko and CoinGecko API?_ Sign up for an account
  [here](https://www.coingecko.com/en/api/pricing)
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## 1. Creating a new API Key

- Once you have signed up and logged in to your CoinGecko account, go to [Developer Dashboard](https://www.coingecko.com/en/developers/dashboard):

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d5fdca3-image.png",
        null,
        "CoinGecko API Developer Dashboard"
      ],
      "align": "center",
      "border": true,
      "caption": "CoinGecko API Developer Dashboard"
    }
  ]
}
[/block]


- Click on **+ Add New Key** button to create a new API key:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0e2f30d-image.png",
        null,
        "Create New API Key"
      ],
      "align": "center",
      "border": true,
      "caption": "Create New API Key"
    }
  ]
}
[/block]


<br />

## 2. Making API Request

- The root URL for the CoinGecko Pro API is `https://pro-api.coingecko.com/api/v3/`.
- Refer to the [Authentication](/reference/authentication) page for detailed information.
- For a demonstration using the [Ping](/reference/ping) Endpoint, use the following example:  
  `https://pro-api.coingecko.com/api/v3/ping?x_cg_pro_api_key=YOUR_API_KEY`
- Feel free to experiment with [Ping](/reference/ping-server) or other endpoints in the documentation by entering your API Key in the `x-cg-pro-api-key` section and clicking the "Try It!" button.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/27ff800-image.png",
        null,
        "Ping Endpoint"
      ],
      "align": "center",
      "border": true,
      "caption": "Ping Endpoint"
    }
  ]
}
[/block]


<br />

## 3. Edit or Delete API Key

- Go to Developer's Dashboard and click “Edit” button on a specific API Key.
- In case the API Key is compromised, you may delete the API Key by clicking the "Delete Key" button.
- You may also update the label and save the changes by clicking "Confirm" button.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cf29b58-image.png",
        null,
        "Edit API Key"
      ],
      "align": "center",
      "border": true,
      "caption": "Edit API Key"
    }
  ]
}
[/block]


<br />

## 4. API Usage Report

- You can monitor your API usage in the Usage Report section, which provides details such as:
  - Total Monthly API Calls.
  - Remaining Monthly API Calls.
  - Rate Limit (Request Per Minute) — maximum number of API requests allowed in one minute.
  - Last Used - the timestamp of the last used instance.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c436404-image.png",
        null,
        "API Usage Report"
      ],
      "align": "center",
      "border": true,
      "caption": "API Usage Report"
    }
  ]
}
[/block]


- You can also check your full historical usage by specifying `API Keys`, `timeframe` or `date range`. You may export as CSV for more comprehensive view.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ed3143e-image.png",
        null,
        "Historical Data Usage"
      ],
      "align": "center",
      "border": true,
      "caption": "Historical Data Usage"
    }
  ]
}
[/block]


<br />

## 5. Others

### Call Consumption Alerts

You may enable or disable call consumption alerts in the tab below to receive emails when specific credit usage thresholds are reached.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/752e839-image.png",
        null,
        "Call Consumption Alerts"
      ],
      "align": "center",
      "border": true,
      "caption": "Call Consumption Alerts"
    }
  ]
}
[/block]


### Overage Option (Beta)

The overage option enables you to make API calls when your usage exceeds the monthly credits. You can activate the overage option by clicking the "Turn On Overage" button, ensuring uninterrupted service and allowing you to continue making API calls or vice versa.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b4711e6-image.png",
        null,
        "Overage Option"
      ],
      "align": "center",
      "border": true,
      "caption": "Overage Option"
    }
  ]
}
[/block]
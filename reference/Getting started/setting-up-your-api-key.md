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

* Once you have signed up and logged in to your CoinGecko account, go to [Developer Dashboard](https://www.coingecko.com/en/developers/dashboard):

<Image alt="CoinGecko API Developer Dashboard" align="center" border={true} src="https://files.readme.io/d5fdca3-image.png">
  CoinGecko API Developer Dashboard
</Image>

* Click on **+ Add New Key** button to create a new API key:

<Image alt="Create New API Key" align="center" border={true} src="https://files.readme.io/0e2f30d-image.png">
  Create New API Key
</Image>

<br />

## 2. Making API Request

* The root URL for the CoinGecko Pro API is `https://pro-api.coingecko.com/api/v3/`.
* Refer to the [Authentication](/reference/authentication) page for detailed information.
* For a demonstration using the [Ping](/reference/ping) Endpoint, use the following example:\
  `https://pro-api.coingecko.com/api/v3/ping?x_cg_pro_api_key=YOUR_API_KEY`
* Feel free to experiment with [Ping](/reference/ping-server) or other endpoints in the documentation by entering your API Key in the `x-cg-pro-api-key` section and clicking the "Try It!" button.

<Image alt="Ping Endpoint" align="center" border={true} src="https://files.readme.io/27ff800-image.png">
  Ping Endpoint
</Image>

<br />

## 3. Edit or Delete API Key

* Go to Developer's Dashboard and click “Edit” button on a specific API Key.
* In case the API Key is compromised, you may delete the API Key by clicking the "Delete Key" button.
* You may also update the label and save the changes by clicking "Confirm" button.

<Image alt="Edit API Key" align="center" border={true} src="https://files.readme.io/cf29b58-image.png">
  Edit API Key
</Image>

<br />

## 4. API Usage Report

* You can monitor your API usage in the Usage Report section, which provides details such as:
  * Total Monthly API Calls.
  * Remaining Monthly API Calls.
  * Rate Limit (Request Per Minute) — maximum number of API requests allowed in one minute.
  * Last Used - the timestamp of the last used instance.

<Image alt="API Usage Report" align="center" border={true} src="https://files.readme.io/c436404-image.png">
  API Usage Report
</Image>

* You can also check your full historical usage by specifying `API Keys`, `timeframe` or `date range`. You may export as CSV for more comprehensive view.

<Image alt="Historical Data Usage" align="center" border={true} src="https://files.readme.io/ed3143e-image.png">
  Historical Data Usage
</Image>

<br />

## 5. Others

### Call Consumption Alerts

You may enable or disable call consumption alerts in the tab below to receive emails when specific credit usage thresholds are reached.

<Image alt="Call Consumption Alerts" align="center" border={true} src="https://files.readme.io/752e839-image.png">
  Call Consumption Alerts
</Image>

### Overage Option (Beta)

The overage option enables you to make API calls when your usage exceeds the monthly credits. You can activate the overage option by clicking the "Turn On Overage" button, ensuring uninterrupted service and allowing you to continue making API calls or vice versa.

<Image alt="Overage Option" align="center" border={true} src="https://files.readme.io/b4711e6-image.png">
  Overage Option
</Image>

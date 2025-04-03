---
title: ❌ Common Errors & Rate Limit
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
## Common Errors

The server responds to a user’s request by issuing status codes when the request is made to the server. Kindly refer to the table below to further understand the status codes when indicating the success or failure of an API call.

| Status Codes                  | Description                                                                                                                                                                                                                                           |
| :---------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `400` (Bad Request)           | This is due to an invalid request and the server could not process the user's request                                                                                                                                                                 |
| `401` (Unauthorized)          | This is due to the lack of valid authentication credentials for the requested resource by the user                                                                                                                                                    |
| `403` (Forbidden)             | This is likely indicating that your access is blocked by our server, and we're unable to authorize your request                                                                                                                                       |
| `429` (Too many requests)     | This is likely indicating that the rate limit has reached. The user should reduce the number of calls made, or consider scaling their service plan that has much higher rate limits and call credits                                                  |
| `500` (Internal Server Error) | This is a generic error response indicating that the server has encountered an unexpected issue that prevented it from fulfilling the request                                                                                                         |
| `503` (Service Unavailable)   | The service is currently unavailable. Please check the API status and updates on <https://status.coingecko.com>                                                                                                                                       |
| `1020` (Access Denied)        | This is due to violation of CDN firewall rule                                                                                                                                                                                                         |
| `10002` (Incorrect API Key)   | You have provided incorrect API key credentials. Please check your keys in developer dashboard and ensure that your request is authorized                                                                                                             |
| `10005`                       | You may not have access to this endpoint. e.g. 'This request is limited Pro API subscribers'. You may wanna subscribe to a paid plan [here](https://www.coingecko.com/en/api/pricing)                                                                 |
| CORS error                    | A CORS error occurs when the server doesn’t return the CORS headers required. You may learn more and attempt the recommended solutions [here](https://www.bannerbear.com/blog/what-is-a-cors-error-and-how-to-fix-it-3-ways/#how-to-fix-a-cors-error) |

<br />

## Rate Limit

> 📘 **Notes**
> 
> - If you're using the Public API with Google Sheet and got hit with error, this is due to the IP sharing among Google Sheet users, and we have no control over this. If you need reliable performance, please **register for a demo account** or **subscribe to a paid plan** that comes with dedicated infra (API key) to prevent rate limit issues.
> - For more details, please go to the page [here](https://www.coingecko.com/en/api/pricing).

- For Public API user (Demo plan), the rate limit is ~30 calls per minutes and it varies depending on the traffic size.
- If you're Pro API user (any paid plan), the rate limit is depending on the paid plan that you're subscribed to.
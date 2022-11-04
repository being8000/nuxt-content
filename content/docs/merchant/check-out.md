---
sidebar_position: 2
---

# Check-out

## Obtain Check-out Address

|URL网址 | /open/signature/access-token |
| --- | --- |
|Content-Type  | application/json|
|Request Method  | POST |

### Parameter 请求参数

|Property | Data type | Required | Description |
| --- | --- | --- | --- |
| Amount |  Decimal | Yes |  Amount（keep two decimal places） |
| Callback Address | String | Yes | Call-back address, to inform merchant of payment result |
| Merchant UID | String | Yes | Identifier e-pon assigns to merchant |
| Mt Order Number | String | Yes | Identifier generated by merchant |
| Remark | String | Yes |  Order remarks |
| Time Stamp | Long |  Yes | To mark the time, consisting of 11 numbers |
| Sign Info | String | Yes | The value of the above parameter (exclude sign Info) and the value of merchant secret Key ascending sort to consist of a new character string according to ASCII code (capital letter and small letter make no difference) and then keep the new character encrypted |

### Returned data

|Property | Data type | Description |
| --- | --- | --- |
| Code | Integer | HTTP Code 200 = Succeed 403 = Wrong request 500 = Abnormal request |
| Message | String | the corresponding description of request |
| [Data](#response-data) | Object | Code equal to 200, then return , please refer the below information for details |
| Timestamp | Long | Timestamp, consists of 11 numbers |
| Request | ID | String Code unequal to 200， then return， for wrong location |

#### the property of the data of the Result {#response-data}

:::info

|Property | Data type | Description |
| --- | --- | --- |
| Access Token | String | Access token |
| URL | String | The URL redirect to e-pon check out |

:::

#### Error Code

- 500 – Abnormal request
- 403 – Wrong request
- 200 – Succeed
  
### Samples of request data

```json
{
 "amount": 10,
 "timeStamp": 1649147989713,
 "merchantUid": "1234567890",
 "mtOrderNumber": "ORDE1234567890",
 "callbackAddress": "https://www.google.com/",
 "remark": "some content",
 "signInfo": "c3faba44381bc56c2b83df4cb7a3caf2"
}

```

### Samples of returned data

```json
{
 "code": 200,
 "message": "SUCCESS",
 "data": {
 "accessToken": "af981a9dafec455f92002d6ac78b7f5b",
 "url": "http://epon-merchanth5.4jpay.com/#/pay/eco/77b7bf1762474fdbb15cd1d0db13a31a"
 },
 "timestamp": 1649148350701
}

```

```json

{
 "code": 500,
 "message": "The mtOrderNumber is repeated",
 "requestId": "30ADD845-31D3-4561-8FFA-0BE9D95F2FB2",
 "timestamp": 1649148350701
}

```
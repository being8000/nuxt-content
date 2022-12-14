---
sidebar_position: 2
---

# Cash-In

## Initiate payment 开起付款

|URL网址 | /open/bank-transfer/prcoess |
| --- | --- |
|Content-Type 内容样式 | application/json|
|Request Method 请求方法 | POST |

### Parameter 请求参数

|Property | Data type | Required | Description |
| --- | --- | --- | --- |
|beneficiaryAccountNumber     | String |  Yes | Beneficiary Account Number 收款人帐号 |
|beneficiaryName              | String |  Yes | Beneficiary Name 收款人名字 |
|beneficiaryAddressLine1      | String |  Yes | Beneficiary Address Line1 收款人地址 第1行 |
|beneficiaryAddressLine2      | String |  Yes | Beneficiary Address Line2 收款人地址 第1行 |
|beneficiaryAddressCity         | String |  Yes | Beneficiary Address City 收款人城市地址 |
|beneficiaryAddressProvince   | String |  Yes | Beneficiary Address Province 收款人省份地址 |
|beneficiaryAddressZipCode    | String |  Yes | Beneficiary Address Zip Code 收款人地政编码址邮 |
|remittanceAmount   |   String |  Yes | Remittance Amount（Keep two decimal places） 汇款金额（保留两位小数）
|remittanceReceivingBank    | String |  Yes | Remittance Receiving Bank code 收款银行代码（见附件1） |
|remittanceReceivingBankName    | String |  Yes | Remittance Receiving Bank Name 收款银行名字 (见附件1) |
|remittanceInstructions   | String |  No | Remittance Instructions 汇款说明  |
|mtOrderNumber    | String |  Yes | Identifier generated by merchant 商家生成的标识 |
|merchantUid    | String |  Yes | Merchant UID 商家的UID |
|fee    | String |  yes | Fee(if Not , then 0.00) 手续费 （如没有，是0.00） |
|sign   | String |  Yes | Sign 签名  |
|callBackUri    | String |  yes | Call-back address, to inform merchant of payment result 回调地址，给通知商户付款结果 |

### Example for generate sign：代码示例

```javascript

/**
     *
     * @param sortedMap 请求参数去掉sign字段以后，按照ascii排序
     * @param sortedMap  (after sign field, request parameter removed, then sort by asci)
     * @param key 分配给商户的密钥字段，请自行在商户后台查询
     * @param key (The key field assigned to the merchant, please check back in merchant's backdoor system)
     * @return
     */

private String getSign(SortedMap<String, String> sortedMap, String key) {
 Set<Map.Entry<String, String>> set = sortedMap.entrySet();
 Iterator<Map.Entry<String, String >> iterator = set.iterator();
 StringBuffer buffer = new StringBuffer("");
 while(iterator.hasNext()){
  Map.Entry<String, String> entry = iterator.next();
  buffer.append(entry.getKey()).append("=").append(entry.getValue()).append("&");
 }
 buffer.append("key=").append(key);
 log.info("sign source is {}", buffer);
 String varifiedSign = MD5.create().digestHex(buffer.toString());
 return varifiedSign;
}

```

### Result

|Property | Data type | Required | Description |
| --- | --- | --- | --- |
| merchantUid     | String    | yes |  Merchant UID   |
| orderNumber     | String    | yes |  e-pon’s Order Number   |
| mtOrderNumber   | String    | yes |  Identifier generated by merchant   |
| amount          | Decimal    | yes | remittanceAmount+fee   |
| dateTime        | String    | yes |  yyyy-MM-dd+’T’+HH:mm:ss   |
| status          | String    | yes |  Success 成功 Failed 失败   |
| remark          | String    | yes |  Description of Transaction   |
| Sign            | String    | yes |  Security Sign: refer to Initiate payment   |

:::caution

- Noted: If merchant process successful , then merchant system need return “SUCCESS” to e-pon system , or we will renotification to merchant system until merchant system return “SUCCESS”
- 注意：如果商户处理成功，则商户系统需要向e-pon系统返回“SUCCESS”，否则我们将重新通知商户系统，直到商户系统返回“SUCCESS”

:::

## Additional Reference Information

```json
{
  "records": [
    {
      "code": "148120",
      "bank": "Sun Savings Bank",
      "brstn": ""
    },
    {
      "code": "161207",
      "bank": "Sterling Bank Of Asia",
      "brstn": ""
    },
    {
      "code": "161233",
      "bank": "Malayan Bank Smb",
      "brstn": ""
    },
    {
      "code": "161243",
      "bank": "Rcbc Savings Bank Inc.",
      "brstn": ""
    },
    {
      "code": "161311",
      "bank": "Asia United Bank",
      "brstn": ""
    },
    {
      "code": "161312",
      "bank": "Banco De Oro Unibank, Inc.",
      "brstn": ""
    },
    {
      "code": "161317",
      "bank": "Bank Of Commerce",
      "brstn": ""
    },
    {
      "code": "161319",
      "bank": "Bank Of The Philippine Islands",
      "brstn": ""
    },
    {
      "code": "161326",
      "bank": "Devt. Bank Of The Phils.",
      "brstn": ""
    },
    {
      "code": "161340",
      "bank": "Maybank Phils.,Inc.",
      "brstn": ""
    },
    {
      "code": "161341",
      "bank": "Metropolitan Bank and Trust Co",
      "brstn": ""
    },
    {
      "code": "161345",
      "bank": "Phil. Bank Of Communications",
      "brstn": ""
    },
    {
      "code": "161346",
      "bank": "Philippine National Bank",
      "brstn": ""
    },
    {
      "code": "161360",
      "bank": "Security Bank Corporation",
      "brstn": ""
    },
    {
      "code": "161398",
      "bank": "Chinabank",
      "brstn": ""
    },
    {
      "code": "161399",
      "bank": "Chinabank Savings",
      "brstn": ""
    },
    {
      "code": "161400",
      "bank": "Chinatrust Banking Corp",
      "brstn": ""
    },
    {
      "code": "161401",
      "bank": "Eastwest Bank",
      "brstn": ""
    },
    {
      "code": "161402",
      "bank": "Equicom Savings Bank",
      "brstn": ""
    },
    {
      "code": "161403",
      "bank": "Omnipay",
      "brstn": ”“
    },
    {
      "code": "161404",
      "bank": "Paymaya",
      "brstn": “”
    },
    {
      "code": "161405",
      "bank": "PSBank",
      "brstn": ""
    },
    {
      "code": "161406",
      "bank": "Robinsons Bank",
      "brstn": ""
    },
    {
      "code": "161407",
      "bank": "UCPB",
      "brstn": ""
    },
    {
      "code": "161408",
      "bank": "UnionBank",
      "brstn": ""
    },
    {
      "code": "161409",
      "bank": "RCBC Bank",
      "brstn": ""
    },
    {
      "code": "161410",
      "bank": "Landbank Of The Phils",
      "brstn": ""
    },
    {
      "code": "161411",
      "bank": "Yuanta Savings Bank",
      "brstn": ”“
    },
    {
      "code": "161412",
      "bank": "Philtrust Bank",
      "brstn": ""
    },
    {
      "code": "161414",
      "bank": "G-Xchange, Inc.",
      "brstn": “”
    },
    {
      "code": "161428",
      "bank": "DUNGGANUN BANK INC.",
      "brstn": ""
    },
    {
      "code": "161429",
      "bank": "ISLA BANK INC.",
      "brstn": ”“
    },
    {
      "code": "161430",
      "bank": "UCPB SAVINGS BANK",
      "brstn": “”
    }
  ],
  "totalRecords": 34
}
```

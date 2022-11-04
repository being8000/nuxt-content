---
displayed_sidebar: jsBridgeSidebar
sidebar_position: 2
---

# JSBridge 方法列表

## sysInfo 获取系统信息

• **方法名** = `sysInfo`

#### 传入参数

```js
{
}
```

#### 返回格式

```js
  {
 "env": "prod", // 客户端环境
 "token": "82dd66bb458e4d50bf52c4bf58xxxxx", // token
 "userInfo": {
  "avatar": "null", // 用户头像
  "bill": false, // bill
  "comm": false,
  "countryCode": "63", // 手机区号
  "createTime": "2022-05-11 11:06:46", // 注册时间
  "frozenStatus": 1, //
  "id": "101851", // 用户id wtUserId
  "isOpen": 3,
  "kycActual": 0,
  "kycActualType": 0,
  "lastCount": 0,
  "nickname": "906\*\*\*\*084", // 昵称
  "parentId": 0,
  "phone": "9063009084", // 手机号
  "realStatus": 0,
  "status": 1,
  "voice": false
 }
}
```

## statusBarHeight 获取状态栏高度

• **方法名** = `statusBarHeight`

#### 传入参数

```js
{
}
```

#### 返回格式

```js
{
  height: 0 // 系统状态栏高度
}
```

## closeH5 退出当前 H5

• **方法名** = `closeH5`

#### 传入参数

```js
{
}
```

#### 返回格式

```js
{
}
```

## logout 退出登录

• **方法名** = `logout`

#### 传入参数

```js
{
}
```

#### 返回格式

```js
{
}
```

## toClient 跳转客户端页面

• **方法名** = `toClient`

#### 传入参数

```js
{
  url: 'xxx' // 客户端页面路径
}
```

- url 值如下  
  • **跳转用户分享二维码** = `recommendQr`  
  • **跳转网点** = `serviceCenter`  
  • **跳转忘记密码** = `forgotPass`  
  • **跳转客服页面** = `customerService`  
  • **跳转 ekyc 认证等级** = `ekyc`

#### 返回格式

```js
{
}
```

## webview 跳转 webview

• **方法名** = `webview`

#### 传入参数

```js
  {
    url: '' // webview url
    showNavBar: '0',  // 0/1   0隐藏  1显示
    title: ' ' , // 标题
    navbarColor : '' , //  16进制颜色 0x…
    navBarStyle: ' ',  // 0/1   0 文字/箭头白色   1 文字/箭头黑色
    backBtnAction: '',  //  0/1   0跳上一级H5页面  1移除webview控件

    //暂时用不到
    showRightBtn:'',        // 0/1   0隐藏  1显示
    rightBtnContentType:'',  // 0  标题  1图片
    rightBtnTitle: ' ' ,     // 标题
    rightBtnImageUrl: '' ,   // 图片地址
    rightBtnAction: ' ' ,    // 待定
  }
```

#### 返回格式

```js
{
}
```

## toMini 跳转 mpaas 小程序

• **方法名** = `toMini`

#### 传入参数

```js
{
  url: '' // webview url
}
```

#### 返回格式

```js
  {
    page: 'pages/da5/xxx', // 小程序页面路径
    id: '888888888888888',  // 小程序 ID
    query: 'a=1&b=2...' // 页面跳转传参
  }
```

## screenshot 屏幕截图

• **方法名** = `screenshot`

#### 传入参数

```js
{
}
```

#### 返回格式

```js
{
}
```

## saveImage 保存图片

• **方法名** = `saveImage`

#### 传入参数

```js
// base64 -> url 内容为图片的base64
// url -> 图片的访问地址
{
  type: 'base64', 
  url: 'xxx'
}
```

#### 返回格式

```js
{
}
```

## goBack 返回上一页

• **方法名** = `goBack`  

#### 传入参数

```js
{
}
```

#### 返回格式

```js
{
}
```

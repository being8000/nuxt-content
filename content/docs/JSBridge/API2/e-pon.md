---
displayed_sidebar: jsBridgeSidebar
sidebar_position: 1
---

# 前置备注

安卓别名： handler
客户端 公用 h5 通知原生方法名： h5Call

## 参数

```bash
{
  method: '方法名，值参考下表'
  data: {}  //h5传参
}
```

## 客户端 回调传值 h5 方法

- window.\_Vue\_.bridgeCallback('[[params]]')
- [[params]] 说明 json 字符串格式如下, json 回调过来之前需要 base64 转码

```bash
{
  method: 'h5传递的方法名',
  data: {} // 客户端要返回给H5的值, 值参考下面
}
```

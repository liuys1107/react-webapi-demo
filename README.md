
# 讯飞语音听写 webApi 前端示例

### 安装并启动
```
npm install
npm run dev
```

### 配置应用ID及服务密钥

打开 `/src/api/aer-config.js` 填写你在讯飞云平台上创建的应用的ID及语音听写服务的密钥。
```
{
  engineType: 'sms16k', // 引擎类型, 默认即可
  aue: 'raw', // 音频编码，本实例取'raw'
  appId: '', // 应用ID
  APIKey: '', // 服务密钥
  sampleRate: 16000, // 采样率(48000)，注意：设定的值必须为 48000 的约数
  sampleBits: 16, // 采样比特率，8 或 16
  twoChannel: false // 双声道
}
```


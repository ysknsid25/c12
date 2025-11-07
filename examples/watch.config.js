// watch用の設定ファイル（このファイルを変更して監視機能をテストできます）
export default {
  message: 'Hello from c12!',
  count: 42,
  enabled: true,
  server: {
    port: 3000,
    host: 'localhost'
  },
  features: {
    hotReload: true,
    autoSave: false
  },

  // この設定を変更してみてください！
  // 例:
  // - messageを変更する
  // - countの値を変更する
  // - 新しいプロパティを追加する
  // - featuresの値を変更する

  timestamp: new Date().toISOString()
};
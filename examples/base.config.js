// ベース設定ファイル
export default {
  app: {
    name: 'BaseApp',
    description: 'ベースアプリケーション設定'
  },
  server: {
    port: 3000,
    host: 'localhost'
  },
  logging: {
    level: 'info'
  },
  features: {
    auth: false,
    cache: false
  }
};
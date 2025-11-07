// 拡張設定ファイル
export default {
  // ローカルファイルからの拡張
  extends: './base.config.js',

  // ベース設定を上書き・追加
  app: {
    name: 'ExtendedApp',
    version: '2.0.0'
  },
  server: {
    port: 4000 // ベースの3000から4000に変更
  },
  features: {
    auth: true, // ベースのfalseからtrueに変更
    cache: true, // ベースのfalseからtrueに変更
    monitoring: true // 新しい機能を追加
  },
  database: {
    // 完全に新しい設定セクション
    type: 'postgresql',
    host: 'localhost',
    port: 5432
  }
};
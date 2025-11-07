// myapp設定ファイル（JavaScript形式）
export default {
  port: 8080,
  host: '0.0.0.0',
  database: {
    host: 'localhost',
    port: 5432,
    name: 'myapp_db'
  },
  features: {
    auth: true,
    cache: true
  }
};
// 環境変数ファイルと組み合わせる設定
export default {
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost'
  },
  database: {
    url: process.env.DATABASE_URL || 'postgresql://localhost:5432/myapp',
    ssl: process.env.DATABASE_SSL === 'true'
  },
  auth: {
    secret: process.env.JWT_SECRET || 'default-secret',
    provider: process.env.AUTH_PROVIDER || 'local'
  },
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379'
  }
};
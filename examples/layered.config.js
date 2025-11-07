// 複数階層の拡張設定
export default {
  extends: './layer1.config.js', // layer1 -> base の順で拡張

  layer: 'final',
  app: {
    name: 'LayeredApp',
    version: '3.0.0'
  },
  middleware: {
    rateLimit: true // 新しいミドルウェアを追加
  },
  security: {
    jwt: {
      secret: 'your-secret-key',
      expiresIn: '1h'
    }
  }
};
// 第1階層設定
export default {
  extends: './base.config.js',

  layer: 'layer1',
  app: {
    name: 'Layer1App'
  },
  middleware: {
    cors: true,
    helmet: true
  }
};
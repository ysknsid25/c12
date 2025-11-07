// 基本的なc12の使用例
import { loadConfig } from '../dist/index.mjs';

async function basicExample() {
  console.log('=== 基本的な使用例 ===\n');

  // デフォルト設定を指定して設定を読み込む
  const { config } = await loadConfig({
    name: 'myapp',
    defaults: {
      port: 3000,
      host: 'localhost',
      debug: false
    }
  });

  console.log('読み込まれた設定:');
  console.log(JSON.stringify(config, null, 2));
}

basicExample().catch(console.error);
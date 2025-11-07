// 環境別設定の例
import { loadConfig } from '../dist/index.mjs';

async function environmentExample() {
  console.log('=== 環境別設定の例 ===\n');

  // NODE_ENVを設定
  const originalEnv = process.env.NODE_ENV;

  // 開発環境での設定読み込み
  process.env.NODE_ENV = 'development';
  const { config: devConfig } = await loadConfig({
    name: 'webapp',
    defaults: {
      port: 3000,
      debug: false,
      database: {
        host: 'localhost'
      }
    }
  });

  console.log('開発環境の設定:');
  console.log(JSON.stringify(devConfig, null, 2));

  // 本番環境での設定読み込み
  process.env.NODE_ENV = 'production';
  const { config: prodConfig } = await loadConfig({
    name: 'webapp',
    defaults: {
      port: 3000,
      debug: false,
      database: {
        host: 'localhost'
      }
    }
  });

  console.log('\n本番環境の設定:');
  console.log(JSON.stringify(prodConfig, null, 2));

  // テスト環境での設定読み込み
  process.env.NODE_ENV = 'test';
  const { config: testConfig } = await loadConfig({
    name: 'webapp',
    defaults: {
      port: 3000,
      debug: false,
      database: {
        host: 'localhost'
      }
    }
  });

  console.log('\nテスト環境の設定:');
  console.log(JSON.stringify(testConfig, null, 2));

  // 元の環境変数を復元
  process.env.NODE_ENV = originalEnv;

  // カスタム環境変数での例
  console.log('\n=== カスタム環境での設定例 ===');
  process.env.CUSTOM_ENV = 'staging';

  const { config: customConfig } = await loadConfig({
    name: 'webapp',
    envName: 'CUSTOM_ENV', // カスタム環境変数を使用
    defaults: {
      port: 3000,
      debug: false
    }
  });

  console.log('カスタム環境（staging）の設定:');
  console.log(JSON.stringify(customConfig, null, 2));

  delete process.env.CUSTOM_ENV;
}

environmentExample().catch(console.error);
// 複数の設定ファイル形式の例
import { loadConfig } from '../dist/index.mjs';

async function multipleFormatsExample() {
  console.log('=== 複数の設定形式をサポートする例 ===\n');

  // c12は以下の順序で設定ファイルを探します：
  // 1. formats.config.js
  // 2. formats.config.json
  // 3. formats.config.yaml
  // 4. formats.config.toml
  // など...

  const { config, configFile, sources } = await loadConfig({
    name: 'formats',
    defaults: {
      app: {
        name: 'MyApp',
        version: '1.0.0'
      }
    }
  });

  console.log('使用された設定ファイル:', configFile);
  console.log('設定のソース情報:', sources.map(s => ({ source: s.source, sourceFile: s.sourceFile })));
  console.log('\n読み込まれた設定:');
  console.log(JSON.stringify(config, null, 2));

  // RCファイルの例も確認
  console.log('\n=== RCファイルの読み込み例 ===');
  const { config: rcConfig } = await loadConfig({
    name: 'formats',
    rcFile: '.formatsrc', // .formatsrcファイルを探す
    defaults: {
      theme: 'light',
      language: 'ja'
    }
  });

  console.log('RC設定:');
  console.log(JSON.stringify(rcConfig, null, 2));
}

multipleFormatsExample().catch(console.error);
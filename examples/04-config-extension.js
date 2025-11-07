// 設定の拡張機能の例
import { loadConfig } from '../dist/index.mjs';

async function extensionExample() {
  console.log('=== 設定の拡張機能の例 ===\n');

  // 基本的な拡張の例
  const { config, sources } = await loadConfig({
    name: 'extended',
    defaults: {
      app: {
        name: 'ExtendedApp',
        version: '1.0.0'
      }
    }
  });

  console.log('拡張された設定:');
  console.log(JSON.stringify(config, null, 2));
  console.log('\n設定のソース:');
  sources.forEach((source, index) => {
    console.log(`${index + 1}. ${source.source} (${source.sourceFile || 'デフォルト'})`);
  });

  // 複数階層の拡張例
  console.log('\n=== 複数階層の拡張例 ===');
  const { config: layeredConfig } = await loadConfig({
    name: 'layered',
    defaults: {
      base: {
        feature: 'default'
      }
    }
  });

  console.log('階層化された設定:');
  console.log(JSON.stringify(layeredConfig, null, 2));

  // dotenvファイルとの組み合わせ例
  console.log('\n=== 環境変数ファイルとの組み合わせ例 ===');
  const { config: envConfig } = await loadConfig({
    name: 'withenv',
    dotenv: true, // .envファイルを読み込む
    defaults: {
      server: {
        port: 3000,
        host: 'localhost'
      }
    }
  });

  console.log('環境変数を含む設定:');
  console.log(JSON.stringify(envConfig, null, 2));
}

extensionExample().catch(console.error);
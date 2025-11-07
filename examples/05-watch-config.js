// 設定ファイル監視の例
import { watchConfig } from '../dist/index.mjs';

async function watchExample() {
  console.log('=== 設定ファイル監視の例 ===\n');
  console.log('watch.config.jsファイルを監視します...');
  console.log('ファイルを変更してみてください！（Ctrl+Cで終了）\n');

  let configCount = 0;

  const { config: initialConfig, unwatch } = await watchConfig({
    name: 'watch',
    defaults: {
      message: 'Hello World',
      count: 0,
      enabled: true
    },
    onWatch: (event) => {
      configCount++;
      console.log(`[${new Date().toLocaleTimeString()}] 設定変更検出 #${configCount}`);
      console.log('イベント:', event.type);
      if (event.newConfig) {
        console.log('新しい設定:');
        console.log(JSON.stringify(event.newConfig, null, 2));
      }
      console.log('---');
    },
    onUpdate: (newConfig) => {
      console.log(`[${new Date().toLocaleTimeString()}] 設定更新完了`);
      console.log('更新された設定:');
      console.log(JSON.stringify(newConfig, null, 2));
      console.log('===================\n');
    }
  });

  console.log('初期設定:');
  console.log(JSON.stringify(initialConfig, null, 2));
  console.log('\nファイル変更を待機中...\n');

  // プロセス終了時にクリーンアップ
  process.on('SIGINT', () => {
    console.log('\n監視を停止しています...');
    unwatch();
    process.exit(0);
  });

  // 30秒後に自動停止（デモ用）
  setTimeout(() => {
    console.log('\n30秒経過しました。監視を停止します。');
    unwatch();
    process.exit(0);
  }, 30000);
}

watchExample().catch(console.error);
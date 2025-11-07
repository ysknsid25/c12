# c12 チュートリアル

このチュートリアルでは、c12の主要な機能を実際のコードサンプルとともに学ぶことができます。

## 前提条件

- Node.js 18以上
- このプロジェクトがビルド済みであること

## ビルド方法

```bash
npm run build
```

## チュートリアルの実行方法

各例を実行する前に、examplesディレクトリに移動してください：

```bash
cd examples
```

## 学習内容

### 1. 基本的な使用法

**ファイル**: `01-basic-usage.js`

c12の最も基本的な使用方法を学びます。

```bash
node 01-basic-usage.js
```

**学習内容**:
- `loadConfig`関数の基本的な使い方
- デフォルト設定の指定方法
- 設定ファイルの自動検出

**関連ファイル**:
- `myapp.config.js` - JavaScript形式の設定ファイル

### 2. 複数の設定形式のサポート

**ファイル**: `02-multiple-formats.js`

c12がサポートする様々な設定ファイル形式を学びます。

```bash
node 02-multiple-formats.js
```

**学習内容**:
- 複数形式の設定ファイル（JS, JSON, YAML）
- 設定ファイルの優先順位
- RCファイルの使用方法
- 設定のソース情報の取得

**関連ファイル**:
- `formats.config.json` - JSON形式の設定
- `formats.config.yaml` - YAML形式の設定
- `.formatsrc` - RCファイル形式の設定

### 3. 環境別設定

**ファイル**: `03-environment-config.js`

NODE_ENVやカスタム環境変数に基づく設定の切り替えを学びます。

```bash
node 03-environment-config.js
```

**学習内容**:
- 環境別設定（`$development`, `$production`, `$test`）
- カスタム環境変数の使用
- 環境に応じた設定の上書き

**関連ファイル**:
- `webapp.config.js` - 環境別設定を含む設定ファイル

### 4. 設定の拡張機能

**ファイル**: `04-config-extension.js`

設定ファイルの拡張（extends）機能を学びます。

```bash
node 04-config-extension.js
```

**学習内容**:
- `extends`キーワードによる設定の継承
- 複数階層の拡張
- 環境変数ファイル（.env）との組み合わせ

**関連ファイル**:
- `base.config.js` - ベース設定
- `extended.config.js` - 拡張設定
- `layer1.config.js` - 第1階層設定
- `layered.config.js` - 複数階層拡張設定
- `withenv.config.js` - 環境変数を使用する設定
- `.env` - 環境変数ファイル

### 5. 設定ファイルの監視

**ファイル**: `05-watch-config.js`

設定ファイルの変更を監視し、リアルタイムで設定を更新する機能を学びます。

```bash
node 05-watch-config.js
```

**学習内容**:
- `watchConfig`関数の使用方法
- ファイル変更の検出
- ホットリロード機能
- 変更イベントのハンドリング

**関連ファイル**:
- `watch.config.js` - 監視対象の設定ファイル（実行中に変更してテスト可能）

## 実践的な使用例

### シンプルなWebアプリケーション設定

```javascript
import { loadConfig } from 'c12';

const { config } = await loadConfig({
  name: 'myapp',
  defaults: {
    port: 3000,
    host: 'localhost'
  }
});

console.log(`Server starting on ${config.host}:${config.port}`);
```

### 開発/本番環境の切り替え

```javascript
// myapp.config.js
export default {
  database: {
    host: 'localhost'
  },
  $production: {
    database: {
      host: 'prod-db.example.com',
      ssl: true
    }
  }
};
```

### 設定の階層化

```javascript
// base.config.js
export default {
  app: { name: 'MyApp' },
  server: { port: 3000 }
};

// production.config.js
export default {
  extends: './base.config.js',
  server: { port: 80 }
};
```

## よくある質問

### Q: 設定ファイルが見つからない場合はどうなりますか？

A: c12はデフォルト設定を使用して動作します。設定ファイルは必須ではありません。

### Q: 複数の設定ファイルがある場合の優先順位は？

A: 以下の順序で検索し、最初に見つかったファイルを使用します：
1. `{name}.config.{js,ts,mjs,cjs,mts,cts}`
2. `{name}.config.{json,jsonc,json5}`
3. `{name}.config.{yaml,yml}`
4. `{name}.config.toml`

### Q: 環境変数の値を設定に使用できますか？

A: はい、設定ファイル内で`process.env`を使用するか、`.env`ファイルと組み合わせて使用できます。

### Q: TypeScriptで型安全な設定を使用するには？

A: 設定の型を定義して`loadConfig`に渡すことができます：

```typescript
interface MyConfig {
  port: number;
  host: string;
}

const { config } = await loadConfig<MyConfig>({
  name: 'myapp',
  defaults: {
    port: 3000,
    host: 'localhost'
  }
});
```

## 次のステップ

このチュートリアルを完了したら：

1. 実際のプロジェクトでc12を使用してみる
2. [公式ドキュメント](https://github.com/unjs/c12)で詳細な機能を確認
3. 他のunjsプロジェクト（Nuxt、Nitroなど）での使用例を参考にする

## トラブルシューティング

### 設定が期待通りに読み込まれない

1. 設定ファイルの構文をチェック
2. ファイル名が正しいか確認（`{name}.config.{ext}`）
3. `sources`配列を確認して読み込み順序を調べる

### 環境別設定が適用されない

1. `NODE_ENV`が正しく設定されているか確認
2. 環境別設定のキー名を確認（`$development`, `$production`など）

### 拡張設定が動作しない

1. `extends`のパスが正しいか確認
2. 拡張元ファイルが存在するか確認
3. 循環参照がないか確認
// 環境別設定を含むwebapp設定ファイル
export default {
  port: 8080,
  debug: true,
  database: {
    host: 'dev-db.example.com',
    port: 5432,
    name: 'webapp_dev',
    ssl: false
  },
  redis: {
    host: 'localhost',
    port: 6379
  },
  logging: {
    level: 'debug',
    pretty: true
  },

  // 開発環境固有の設定
  $development: {
    debug: true,
    database: {
      host: 'localhost',
      name: 'webapp_dev'
    },
    logging: {
      level: 'debug',
      pretty: true
    }
  },

  // 本番環境固有の設定
  $production: {
    port: 80,
    debug: false,
    database: {
      host: 'prod-db.example.com',
      name: 'webapp_prod',
      ssl: true,
      pool: {
        min: 5,
        max: 20
      }
    },
    redis: {
      host: 'redis-cluster.example.com',
      port: 6379,
      cluster: true
    },
    logging: {
      level: 'warn',
      pretty: false,
      file: '/var/log/webapp.log'
    }
  },

  // テスト環境固有の設定
  $test: {
    port: 0, // ランダムポートを使用
    debug: false,
    database: {
      host: 'localhost',
      name: 'webapp_test'
    },
    logging: {
      level: 'error'
    }
  },

  // カスタム環境の設定
  $env: {
    staging: {
      port: 8081,
      debug: true,
      database: {
        host: 'staging-db.example.com',
        name: 'webapp_staging'
      },
      logging: {
        level: 'info'
      }
    }
  }
};
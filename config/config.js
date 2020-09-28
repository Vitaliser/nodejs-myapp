module.exports = {
  "development": {
    "username": "express-mvp-dbuser",
    "password": 123456,
    "database": "express-mvp-db",
    "host": "192.168.5.12",
    "dialect": "postgres",
    "port": 5432
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
export default () => ({
  port: parseInt(process.env.PORT, 10) || 8080,
  database: {
    name: process.env.POSTGRES_DB_NAME,
    host: process.env.POSTGRES_DB_HOST,
    port: parseInt(process.env.POSTGRES_DB_PORT, 10) || 5432,
    username: process.env.POSTGRES_DB_USERNAME,
    password: process.env.POSTGRES_DB_PASSWORD,
  },
});

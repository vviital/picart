const config = {
  database: {
    name: "picart",
    username: "postgres",
    password: "",
    host: "postgres",
    dialect: "postgres",
    dbPool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};

export default config;

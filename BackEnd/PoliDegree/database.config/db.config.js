const dbconfig = {
    HOST: "localhost",
    USER: "jhballen",
    PASSWORD: "jhon123",
    DB: "polidegree",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
module.exports = dbconfig;
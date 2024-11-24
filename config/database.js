require('dotenv').config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { host: process.env.DB_HOST || "localhost", dialect: "mysql", logging: false }
);

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion a la bdd reussie.');
    } catch(error) {
        console.error('Impossible de se connecter a la bdd:', error);
    }
};

module.exports= {sequelize, testConnection};
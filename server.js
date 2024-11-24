const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const { testConnection, sequelize } = require('./config/database');
const User = require('./models/User');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Bienvenue sur le backend du blogAddictz !');
});

testConnection();

sequelize.sync({ force: true}).then(() => {
    console.log('Les modèles ont été synchronisés avec la bdd');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Le serveur est démarré sur http://localhost:${PORT}`);
});

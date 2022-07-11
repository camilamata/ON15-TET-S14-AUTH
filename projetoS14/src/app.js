const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv-safe').config();

const db = require("./database/database");
const clientsRoutes = require('./routes/clientsRoutes');

db.connect();

app.use(cors());
app.use(express.json());
app.use("/clients", clientsRoutes);

module.exports = app;
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);

const {connectSocket} = require('./socket');
const config = require('./config');
const connectDB = require('./db');
const router = require('./network/routes');

const urlDB = `mongodb://${config.dbHost}:${config.dbPort}/${config.dbName}`;

connectDB(urlDB);
connectSocket(server);

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

router(app);

server.listen(config.port, () => console.log(`Server running at http://localhost:${config.port}`));


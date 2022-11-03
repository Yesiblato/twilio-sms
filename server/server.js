const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

// Settings --> configurar

app.set('port', process.env.PORT || 5000);
app.set('../client/public/index.html', path.join(__dirname, '../client/public/index.html'));

//middlewars --> crear funciones que se van a ejecutar cada vez que llamemos al servidor.

app.use(cors());
app.use(express.json());

//routes --> url del servido

app.use('/api/', require('./routes/index.routes'))

//static files

module.exports = app;
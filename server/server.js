const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

// app.get('/', (req, res) => {
//     res.send('hello World')
// })


// const bodyParser = require('body-parser')
// app.use(bodyParser.json)
// app.use(bodyParser.urlencoded({extended:'true'}))


// Settings --> configurar

app.set('port', process.env.PORT || 5000);
app.set('../client/public/index.html', path.join(__dirname, '../client/public/index.html'));


//middlewars --> crear funciones que se van a ejecutar cada vez que llamemos al servidor.

app.use(cors());
app.use(express.json());


//routes --> url del servido

app.use('/api/', require('./routes/index.routes'))
// app.get('/api/', (req, res) => res.send('hola twilio obvio'))
// app.use(require('./routes/index.routes'));


//static files


module.exports = app;
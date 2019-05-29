const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const { mongoose } = require('./database');
const router = express.Router();

//Configuraciones
app.set('port', process.env.PORT || 3000);
//Middewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//Routes
app.use('/Api/clinica',require('./routes/clinica.routes'));
//Prendiendo el servidor

app.listen(app.get('port'), () =>{
     console.log('Example app listening on port', app.get('port'));
});

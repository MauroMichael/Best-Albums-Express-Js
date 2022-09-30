const express = require('express');
const path = require('path');  //el módulo path une directorios
const morgan = require('morgan');

//Inicializations
const app = express();  //servidor real a configurar

//Setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //indicamos a express donde estan los views
app.set('view engine', 'ejs') //el motor de views va a ser el módulo de plantillas ejs

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //lo que reciba lo transforma en json

//Routes
app.use(require('./routes/entries.routes'))

//404 handler
app.use((req, res) => {
    res.status(404).render('404');
});

//Starting the app
app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'));
})
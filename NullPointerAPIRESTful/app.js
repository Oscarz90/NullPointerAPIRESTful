var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');

var app = express();

mongoose.connect('mongodb://localhost/nullpointerDB', function(err, res) {
 if(err) throw err;
 console.log('Conectado a la base de datos');
});
// Middlewares
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(methodOverride());

var router = express.Router();

function hola(req, res){
  res.send("NullPointer APIRESTful");
};

// Index
router.get('/',hola)
.post('/',hola);

app.use(router);

// Import Models and Controllers
//var models = require('./models/usuarios')(app, mongoose);
var UsuariosCtrl = require('./controllers/usuarios');

// API routes
var api = express.Router();

api.route('/usuarios') 
 .get(UsuariosCtrl.findAll)
 .post(UsuariosCtrl.add);

api.route('/usuarios/:id') 
 .get(UsuariosCtrl.findById)
 .post()
 .put()
 .del();

app.use('/api', api);

// Start server
app.listen(3000, function() {
 console.log("Node server running on http://localhost:3000");
});
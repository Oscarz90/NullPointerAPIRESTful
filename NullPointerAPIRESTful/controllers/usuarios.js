var mongoose = require('mongoose');
var UsuariosSchema = mongoose.model('usuarios');

//GET - Return all registers
exports.findAll = function(request, response) {
  
  UsuariosSchema.find(function(error, result) {
    
    //Manejo de Errores
    if(error) response.send(500, error.message);

    //Return the response
    response.status(200).jsonp(resultado);

  });
};

//GET - Return a register with specified ID
exports.findById = function(request, response) {
  
  UsuariosSchema.findById(req.params.id, function(error, result) {
    
    if(error) return response.send(500, error.message);
    
    //Respuesta
    response.status(200).jsonp(result);
    }
  );
};

//POST - Insert a new register
exports.add = function(request, response) {
  
  var usuariosSchema = new UsuariosSchema({
    usuario       : req.body.usuario
    , nombre      : req.body.nombre
    , apellidos   : req.body.apellidos
    , password    : req.body.password
    , email       : req.body.email
    , informacion : req.body.informacion
  });

  usuariosSchema.save(function(error, result) {

    if(err) return res.send(500, err.message);
    
    result.status(200).jsonp(result);

  });

};


exports.update = function(request, response) {
  
  UsuariosSchema.findById(req.params.id, function(error, result) {
    
    //result.name = req.body.name;
    //client.email = req.body.email;
    //client.genre = req.body.genre;

    //Guardar datos
    /*client.save(function(err) {
      if(err) return res.send(500, err.message);
      res.status(200).jsonp(client);
    });*/

  });
};


exports.delete = function(req, res) {
  UsuariosSchema.findById(req.params.id, function(err, client) {
    /*client.remove(function(err) {
      if(err) return res.send(500, err.message);
      res.json({ message: 'Successfully deleted' });
    });*/
  });
}; 

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuariosSchema = new Schema({ 
  usuario         : { type : String }
  , nombre        : { type : String }
  , apellidos     : { type : String }
  , password      : { type : String }
  , email         : { type : String }
  , informacion   : { type : String }
  , fechaCreacion : { type : Date
    , default :  Date.now }
});

module.exports = mongoose.model('usuarios', usuariosSchema);
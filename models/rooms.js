'use strict'

var moongose = require('mongoose');
var Schema = moongose.Schema;

var RoomSchema =({
  numero: String,
  costo: Double,
  impuesto: Double,
  tipo: String,
  estrellas: String,
  location: String,
  status: Boolean,
  hotel: { type: Schema.ObjectId, ref: 'Hotel' }
});


module.exports = moongose.model('Hotel', RoomSchema);
'use strict'

var Room = require('../models/rooms');


function homeRoom(req,res){

    res.status(200).send({
        message: 'estamos en pruebas reserva ok'
    })

}

function saveRoom(req, res){

    var room = new Room();
    var params = req.body;

    if(params.numero && params.costo && params.impuesto && 
        params.tipo && params.ubicacion){
            
            //set data user
            room.numero = params.numero;
            room.costo = params.costo;
            room.impuesto = params.impuesto;
            room.tipo = params.tipo;
            room.ubicacion = params.ubicacion;
            
          
                user.save((err, userStored) => {
                    if(err){
                        return res.status(500).send({
                            response: 'error',
                            message: 'Problemas al guardar el usuario',
                            error : err
                        })


                    }

                    if(roomStored){
                        res.status(200).send({
                            response: 'ok',
                            message: 'Habitación guardada con exito',
                            user: roomStored
                        })
                    }else{
                        res.status(404).send({
                            response: 'error',
                            message: 'no se pudo guardar la habitacion'
                        })
                    }
                });
            

        }else{
            res.status(200).send({
                response: 'err',
                message: 'envia todos los campos necesarios'
            })
        }
}

module.exports = {
    homeRoom,
    saveRoom
}
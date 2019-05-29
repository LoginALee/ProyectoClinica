const persona = require('../Models/persona');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';
const personaCtrl = {};

personaCtrl.getPersonas = async (req, res) =>{
   const personas = await persona.find();
   res.json(personas);
        
};

personaCtrl.createPersona = async (req, res) =>{
    const p = new persona({
        nombre: req.body.nombre,
        edad: req.body.edad,
        fechaNacimiento: req.body.fechaNacimiento,
        nacionalidad: req.body.nacionalidad,
        domicilio: req.body.domicilio,
        telefono: req.body.telefono
    });
    await p.save();
    res.json({
        'status' : 'Persona guardada'
    });
    
};

personaCtrl.getPersonaUnica = async (req, res) =>{
    const p = await persona.findById(req.params.id);
    res.json(p);
};

personaCtrl.editPersona = async (req,res) =>{
    const { id } = req.params;
    const p = {
        nombre: req.body.nombre,
        edad: req.body.edad,
        fechaNacimiento: req.body.fechaNacimiento,
        nacionalidad: req.body.nacionalidad,
        domicilio: req.body.domicilio,
        telefono: req.body.telefono
    };
    await persona.findOneAndUpdate(id, {$set: p}, {new: true});
    res.json({status: 'Persona actualizada'});
};

personaCtrl.deletePersona = async (req, res) => {
    await persona.findOneAndDelete(req.params.id);
    res.json({status : 'Persona borrada'});
};


module.exports = personaCtrl;
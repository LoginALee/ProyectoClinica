const user = require('../auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';

exports.createUser = (req,res) => {
    const newUser = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password
    }

    user.create(newUser,(err, user) => {
        if(err) return res.status(500).send('Server error');
        const expiresIn = 24 * 60 *60;
        const accessToken = jwt.sign({id: user.id},
            SECRET_KEY,{
                expiresIn: expiresIn
            });

            res.send({user});
        });
}

exports.loginUser = (req, res) => {
    const userData = {
        email: req.body.email,
        password: req.body.password
    }
    user.findOne({ email: userData.email }, (err, user) => {
        if(err) return res.status(500).send('Server error');
        if(!user){
            //Email no existe
            res.status(409).send({ message: 'Something is wrong' });
        }
        else{
            const resultPassword = userData.password;
            if(resultPassword){
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {expiresIn: expiresIn});
                res.send({userData});
            }
            else{
                //Contraseña incorrecta
                res.status(409).send({ message: 'Something is wrong' });

            }
        }
    })
}
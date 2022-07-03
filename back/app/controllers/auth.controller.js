const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.users
const user = require('../service');

let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');

exports.createUser = (req, res) => {
    user.userService.createUser(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.status(500).send({ message: err.message })
    })
}

exports.signin = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({ message: "Usuario não encontrado." });
        }

        let passwordValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Senha Invalida!"
            });
        }

        let token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400
        })

        console.log(token)

        res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            accessToken: token
        });
    })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.allAccess = async (req, res) => {
    const users = await user.userService.getAllUsers(req.query)
    res.json(users)
    res.status(200)
};

exports.getUserById = (req, res) => {
    user.userService.getUserById(req.params.id).then(user => {
        res.json(user);
    }).catch(err => {
        res.status(500).sned({ message: err.message })
    })
};

exports.deleteUser = (req, res) => {
    user.userService.deleteUser(req.params.id).then(user => {
        res.json(user);
    }).catch(err => {
        res.status(500).send({ message: err.message })
    })
};

exports.updateUser = (req, res) => { 
    user.userService.updateUser(req.params.id, req.body).then(user => {
        
        res.json(user);
    }).catch(err => {
        res.status(500).send({ message: err.message });
    })
};
const db = require("../../models");
const Users = db.users;

checkDuplicateEmailOrName = (req, res, next) => {
    Users.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if(user){
            res.status(400).send({
                message: 'Falha! nome já em uso! '
            });
            return;
        }

    Users.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(user){
            res.status(400).send({
                message: 'Falha! email já em uso'
            });
            return;
        }
        next();
       });
    });
};

const verifySignUp = {
    checkDuplicateEmailOrName: checkDuplicateEmailOrName
}

module.exports = verifySignUp;
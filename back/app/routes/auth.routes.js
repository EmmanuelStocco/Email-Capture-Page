const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const { authJwt } = require("../middleware");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    //rota para logar um usuario
    app.post('/api/auth/user/signin', controller.signin)

    //rota para criar um usuario
    app.post(
        "/api/auth/user/create",
        [authJwt.verifyToken],
        [
            verifySignUp.checkDuplicateEmailOrName
        ],
        controller.createUser
    );

    //rota para buscar todos os usuarios cadastrados no banco
    app.get(
        '/api/auth/user/all',
        [authJwt.verifyToken],
        controller.allAccess
    );

    //rota para buscar um usuario pelo id
    app.get(
        '/api/auth/user/:id',
        [authJwt.verifyToken],
        controller.getUserById
    ); 

    //rota para deleção de um usuario
    app.delete(
        '/api/auth/user/delete/:id',
        [authJwt.verifyToken],
        controller.deleteUser
    );

    app.put(
        "/api/auth/user/edit/:id",
        //[authJwt.verifyToken],
        controller.updateUser
    );


}
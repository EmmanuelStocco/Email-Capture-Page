const controller = require('../controllers/lead.controller');
const { authJwt } = require("../middleware");

module.exports = function(app){
    //rota para cadastrar um lead 
    app.post(
        '/api/lead/create',
        controller.createLead
    );

    app.get(
        '/api/lead/all',
        controller.getAllLeads
    );

    app.get(
        '/api/lead/export-file',
        // [authJwt.verifyToken],
        controller.exportFile
    );

    app.get(
        '/api/lead/cidade/:city',
        // [authJwt.verifyToken],
        controller.getLeadByCity
    );

    app.get(
        '/api/lead/sexo/:sexo',
        // [authJwt.verifyToken],
        controller.getLeadByGender
    )

}
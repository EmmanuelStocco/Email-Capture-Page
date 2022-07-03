const db = require('../../models/leads.model')
const Lead = db.leads
const services = require('../service')


exports.createLead = (req, res) => {
    services.leadService.createLead(req.body).then(lead => {
        res.json(lead)
    }).catch(err => {
        res.status(500).send({ message: err.message })
    })
};

exports.getAllLeads = (req,res)=> {
    console.log(req.query)
    services.leadService.getAll(req.query).then(leads => {
        res.json(leads)
    }).catch(err => {
        res.status(500).send({ message: err.message })
    }) 
};

exports.exportFile = (req, res) => {
    services.importAndExportFiles.exportXML().then(leadsAll => {
        res.send(leadsAll)
    }).catch(err => {
        res.status(500).send({ message: err.message})
    })
};

exports.getLeadByCity = (req,res) => {
    services.leadService.getLeadByCity(req.params.city, req.query).then(leads => {
        res.json(leads);
    }).catch(err => {
        res.status(500).json({ message: err.message});
    });
}

exports.getLeadByGender = (req,res) => {
    services.leadService.getLeadByGender(req.params.sexo, req.query).then(leads => {
        res.json(leads);
    }).catch(err => {
        res.status(500).json({ message: err.message});
    });
}


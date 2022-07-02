const db = require('../../models');
const Leads = db.leads;
const { getPagination, getPagingData } = require("../utils/functions");

const createLead = async(data) => {
   return leadCreated = await Leads.create({
        username: data.username,
        email: data.email,
        city: data.city,
        gender: data.gender
   })
};

const getAll = async(query) => {
    const { page, size } = query;
    const { limit, offset } = getPagination(page, size)
    const leads = await Leads.findAndCountAll({
        limit,
        offset,
        order: [["id", "DESC"]]
    })
    const data = getPagingData(leads, page, size);
    console.log(data)
    return data
};

const getLeadByCity = async(city, query) => {
    const { page, size } = query;
    const { limit, offset } = getPagination(page, size);
    const leadSearch = await Leads.findAndCountAll({
        limit,
        offset,
        order: [['id', 'DESC']],
        where: {
            city: city
        }
    });
    const leads = getPagingData(leadSearch, page, size);
    return leads;
};

const getLeadByGender = async(sexo, query) => {
    const { page, size } = query;
    const { limit, offset } = getPagination(page, size);
    let genderForSearch
    if(sexo == 'M'){
        genderForSearch = 'Masculino'
    }else{
        genderForSearch = 'Feminino'
    }
    const leadSearch = await Leads.findAndCountAll({
        limit,
        offset,
        order: [['id', 'DESC']],
        where: {
            gender: genderForSearch
        }
    });
    const leads = getPagingData(leadSearch, page, size);
    return leads;
};

module.exports = {
    createLead,
    getAll,
    getLeadByCity,
    getLeadByGender
};
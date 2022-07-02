'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Leads extends Model {
        static associate(models){}
    }
    Leads.init({
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        city: DataTypes.STRING,
        gender: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'leads',
    });
    return Leads
};
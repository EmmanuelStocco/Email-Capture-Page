const db = require("../../models");
const Users = db.users;
let bcrypt = require('bcryptjs');
const { getPagination, getPagingData } = require("../utils/functions");

//criar usuario
async function createUser(data){
    return userCreated = await Users.create({
        username: data.username,
        email: data.email,
        password: bcrypt.hashSync(data.password, 8)
    })
};

//Buscar todos os usuarios cadastrados no banco
async function getAllUsers(query){ 
    const { page, size } = query;
    const { limit, offset } = getPagination(page, size)
    const users = await Users.findAndCountAll({
        limit,
        offset,
        order: [["id", "DESC"]]
    })  
    const data = getPagingData(users, page, size) 

    return data; 
} 

//Busca usuario unico por ID
async function getUserById (id){
    return user = await Users.findByPk(id)
}

//Deletar um usuario
async function deleteUser(id){
    return user = await Users.destroy({
        where: {
            id: id
        }
    })
};

//Editar um usuario
async function updateUser(id, data){
    console.log(data)
    return user = await Users.update({
        username: data.username,
        email: data.email,
        password: bcrypt.hashSync(data.password, 8)
    }, {
        where: {
            id: id
        }
    })
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser
};
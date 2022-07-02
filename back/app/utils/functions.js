const client = require('../service');

function getPagination(page, size){
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
    return { limit, offset};
}

function getPagingData(data, page, limit){
    const { count: totalItems, rows: clients } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, clients, totalPages, currentPage}
}

module.exports = {
    getPagination,
    getPagingData
}
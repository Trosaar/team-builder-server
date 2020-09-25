const db = require('../database/dbConfig.js')

//CRUD Create Read Update Delete

module.exports = {
    add,
    findAll,
    getById,
    getBy,
    update,
    remove
}

function add(user) {
    return db('users').insert(user).then(ids => {
        return getById(ids[0])
    })
}

function findAll() {
    return db('users')
}

function getById(id) {
    return db('users').where({ id }).first()
}

function getBy(filter) {
    return db(users).where(filter).first()
}

function update(info, id) {
    return db('users').where({ id }).update(info)
}

function remove(id) {
    return db('users').where({ id }).del()
}
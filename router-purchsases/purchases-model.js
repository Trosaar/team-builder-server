const db = require('../database/dbConfig.js')

module.exports = {
    getAll,
    getByUser,
    getByItem,
    postNew,
    update,
    remove
}

function getAll() {
    return db('purchases as p')
    .join('users', 'users.UUID', 'p.user_id')
    .join('items as i', 'i.id', 'p.item_id')
}

function getByUser(id) {
    return db('purchases as p')
    .join('users', 'users.UUID', 'p.user_id')
    .join('items as i', 'i.id', 'p.item_id')
    .where({ 'p.user_id': id })
}

function getByItem(id) {
    return db('purchases as p')
    .join('users', 'users.UUID', 'p.user_id')
    .join('items as i', 'i.id', 'p.item_id')
    .where({ 'p.item_id': id })
}

function postNew(item) {
    return db('purchases as p')
    .join('users', 'users.UUID', 'p.user_id')
    .join('items as i', 'i.id', 'p.item_id')
    .insert(item)
    .then(ids => {
        return getByItem(ids[0])
    })
}
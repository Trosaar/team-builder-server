const db = require('../database/dbConfig.js')

module.exports = {
    getAll,
    getByUser,
    getbyID,
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

function getbyID(id) {
    return db('purchases as p')
    .join('users', 'users.UUID', 'p.user_id')
    .join('items as i', 'i.id', 'p.item_id')
    .where({ id })
}

function postNew(purchase) {
    return db('purchases as p')
    .join('users', 'users.UUID', 'p.user_id')
    .join('items as i', 'i.id', 'p.item_id')
    .insert(purchase)
    .then(ids => {
        return getByItem(ids[0])
    })
}

function update(updates) {
    return db('purchases as p')
    .join('users', 'users.UUID', 'p.user_id')
    .join('items as i', 'i.id', 'p.item_id')
    .where('id', req.params.id)
    .insert(updates)
}

function remove(id) {
    return db('purchases as p')
    .where({ id })
    .del()
    .then(() => {
        return 1
    })
}
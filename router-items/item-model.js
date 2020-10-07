const db = require('../database/dbConfig.js')

module.exports = {
    getCat,
    getAll,
    getById,
    add,
    update,
    remove
}

async function getCat() {
    return db('subCategories as s')
    .join('mainCategories as m', 'm.id', 's.main_id')
}

async function getAll() {
    return db('items as i')
    .join('subCategories as sub', 'sub.id', 'i.cat_id')
    .select('i.id', 'i.price', 'i.size', 'i.color', 'i.cat_id')
}

async function getById(id) {
    return db('items as i')
    .join('item_sizes as s', 's.size', 'i.size')
    .join('item_colors as c', 'c.color', 'i.color')
    .where(id)
}

async function add(item) {
    return db('items').insert(item).then(() => {
        return getById(item.id)
    })
}

async function update(updates) {
    return db('items')
    .where( 'id', req.params.id)
    .insert(updates)
}

async function remove(id) {
    return db('items')
    .where(req.params.id)
    .del()
    .then(() => {
        return getAll()
    })
}
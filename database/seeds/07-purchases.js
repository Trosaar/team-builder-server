exports.seed = function(knex) {
    return knex('purchases').insert([
        {'user_id': 0, 'item_id': 0},
        {'user_id': 1, 'item_id': 1},
        {'user_id': 2, 'item_id': 2},
    ])
}
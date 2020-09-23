exports.seed = function(knex) {
    return knex('mainCategories').insert([
        {'category': 'Kitchen'},
        {'category': 'Bath'},
        {'category': 'Bedroom'},
        {'category': 'Computers'},
        {'category': 'Music'},
        {'category': 'Art'},
    ])
}
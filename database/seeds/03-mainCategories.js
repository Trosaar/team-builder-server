exports.seed = function(knex) {
    return knex('mainCategories').insert([
        {'category': 'Kitchen'},
        {'category': 'Bath'},
        {'category': 'Bedroom'},
        {'category': 'Electronics'},
        {'category': 'Music'},
        {'category': 'Art'},

    ])
}
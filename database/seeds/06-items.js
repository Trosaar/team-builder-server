exports.seed = function(knex) {
    return knex('item_colors').insert([
        {'price': 9.99,
            'name': 'New CD',
            'description': 'The BEST songs',
            'cat_id': 12},
        {'price': 99.99,
            'name': 'Best Painting',
            'description': "You're jealous",
            'size': 'small',
            'cat_id': 15},
        {'price': 25.99,
            'name': 'Plates ',
            'description': 'Only the BEST plates',
            'size': 'medium',
            'color': 'Orange',
            'cat_id': 0}
    ])
}
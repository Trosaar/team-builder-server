exports.seed = function(knex) {
    return knex('catagories').insert([
        {'catagory': 'Kitchen'},
        {'catagory': 'Bath'},
        {'catagory': 'Bedroom'},
        {'catagory': 'Electronics'},
        {'catagory': 'Music'},
        {'catagory': 'Art'},

    ])
}
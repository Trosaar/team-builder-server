exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl => {
        tbl.
    })
}

exports.down = frunction(knex) {
    return knex.schema
    .dropTableIfExists()
}

/*
Users
    ID
    Username
    Password

Items
    ID
    price
    description
    stock

puchases
    userID
    itemID
*/

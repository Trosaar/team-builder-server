
exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl => {
        tbl.increments()
        tbl.string('UUID').notNullable().unique()
        tbl.string('username', 36).notNullable().unique()
        tbl.string('password', 36).notNullable()
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

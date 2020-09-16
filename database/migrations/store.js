
exports.up = function(knex) {
    return knex.schema
    .createTable('item_sizes', tbl => {
        tbl.increments()
        tbl.string('size', 128).notNullable().unique()
            .onDelete('CASCADE').onUpdate('CASCADE')
    })
    .createTable('item_colors', tbl => {
        tbl.increments()
        tbl.string('color', 128).notNullable().unique()
            .onDelete('CASCADE').onUpdate('CASCADE')
    })
    .createTable('categories', tbl => {
        tbl.increments()
        tbl.string('category', 36).notNullable()
    })
    .createTable('users', tbl => {
        tbl.string('UUID').notNullable().unique().primary()
        tbl.string('username', 36).notNullable().unique()
        tbl.string('password', 36).notNullable()
    })
    .createTable('items', tbl => {
        tbl.increments()
        tbl.integer('price').unsigned().notNullable()
        tbl.string('name', 128).unique().notNullable()
        tbl.string('description', 240).notNullable()
        tbl.string('size').references('size').inTable('item_sizes')
        tbl.string('color').references('color').inTable('item_colors')
    })
    .createTable('items_categories', tbl => {
        tbl.integer('item_id').notNullable().unsigned()
            .references('id').inTable('items')
        tbl.integer('cat_id').notNullable().unsigned()
            .references('id').inTable('catagories')
    })
    .createTable('purchases', tbl => {
        tbl.increments()
        tbl.integer('user_id').unsigned().notNullable()
            .references('UUID').inTable('users')
            .onDelete('CASCADE').onUpdate('CASCADE')
        tbl.timestamps(true, true)
    })
}

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('purchases')
    .dropTableIfExists('items_catagories')
    .dropTableIfExists('items')
    .dropTableIfExists('users')
    .dropTableIfExists('catagories')
    .dropTableIfExists('item_colors')
    .dropTableIfExists('item_sizes')
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

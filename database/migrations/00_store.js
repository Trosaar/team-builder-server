
exports.up = function(knex) {
    return knex.schema
    .createTable('item_sizes', tbl => {
        tbl.increments()
        tbl.string('size', 128).notNullable().unique()
    })
    .createTable('item_colors', tbl => {
        tbl.increments()
        tbl.string('color', 128).notNullable().unique()
    })
    .createTable('mainCategories', tbl => {
        tbl.increments()
        tbl.string('cat_name', 128).notNullable().unique()
    })
    .createTable('subCategories', tbl => {
        tbl.increments()
        tbl.integer('main_id').notNullable().unsigned()
            .references('id').inTable('mainCategories')
        tbl.string('sub_category', 128).notNullable().unique()
    })
    .createTable('users', tbl => {
        tbl.string('UUID').notNullable().unique().primary()
        tbl.string('username', 36).notNullable().unique()
        tbl.string('password', 36).notNullable()
    })
    .createTable('items', tbl => {
        tbl.increments()
        tbl.decimal('price', 2).unsigned().notNullable()
        tbl.string('name', 128).unique().notNullable()
        tbl.string('description', 240).notNullable()
        tbl.string('size').references('size').inTable('item_sizes')
        tbl.string('color').references('color').inTable('item_colors')
        tbl.integer('cat_id').notNullable().unsigned()
            .references('id').inTable('subCategories')

    })
    .createTable('purchases', tbl => {
        tbl.integer('id', 32).primary().notNullable().unsigned()
        tbl.integer('user_id').unsigned().notNullable()
            .references('UUID').inTable('users')
            .onDelete('CASCADE').onUpdate('CASCADE')
        tbl.integer('item_id').unsigned().notNullable()
            .references('id').inTable('items')
        tbl.timestamps(true, true)
    })
}

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('purchases')
    .dropTableIfExists('items')
    .dropTableIfExists('users')
    .dropTableIfExists('subCategories')
    .dropTableIfExists('mainCategories')
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

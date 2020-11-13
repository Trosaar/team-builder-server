exports.seed = function(knex) {
    return knex("items").insert([
        {"price": 9.99,
            "name": "New CD",
            "description": "The BEST songs",
            "cat_id": 6},
        {"price": 99.99,
            "name": "Best Painting",
            "description": "You're jealous",
            "size": "small",
            "cat_id": 3},
        {"price": 25.99,
            "name": "Plates ",
            "description": "Only the BEST plates",
            "size": "medium",
            "color": "Orange",
            "cat_id": 1}
    ])
}
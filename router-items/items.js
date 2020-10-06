const express = require('express')
const router - express.Router()
const ItemDB = require('./item-model.js')
const jwt = require('jsonwebtoken')
const restricted = require('../router-auth/restricted')


// GET to '/apt/items/'
router.get('/', async (req, res) => {
    try{
        const categories = ItemDB.getCat()
        const items = ItemDB.getAll()

        res.status(200).json({ categories, items })
    } catch(err) {
        res.status(500).json({
            error: "failed to get from base"
        })
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const item = ItemDB.getById(id)

        res.status(200).json({ item })
    } catch(err) {
        res.status(500).json({ error: "failed to get item"})
    }
})
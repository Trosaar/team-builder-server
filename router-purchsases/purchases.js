const express = require('express')
const router = express.Router()
const PurchasesDB = require('./purchases-model.js')
const restricted = require('../router-auth/restricted')

// GET to '/api/purchases/test'
// 
router.get('/test', restricted, async (req, res) => {
    PurchasesDB.getAll().then(purchases => {
        res.status(200).json(purchases)
    }).catch(err => {
        res.status(500).json({ message: "Failed to get purchases"})
    })
})

router.get('/item/:id', restricted, async (req, res) => {
    const itemID = req.params

    try {
        const purchases = await PurchasesDB.getByItem(itemID)

        res.status(200).json(purchases)
    } catch(err) {
        res.status(500).json({ message: `Failed to get purchase ${itemID}` })
    }

})

router.get('/user/:id', restricted, async (req, res) => {
    const userID = req.params

    try {
        const purchases = await PurchasesDB.getByItem(userID)

        res.status(200).json(purchases)
    } catch(err) {
        res.status(500).json({ message: `Failed to get purchase` })
    }
})
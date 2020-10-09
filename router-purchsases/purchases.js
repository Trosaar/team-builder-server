const express = require('express')
const router = express.Router()
const PurchasesDB = require('./purchases-model.js')
const restricted = require('../router-auth/restricted')

// GET to '/api/purchases/test'
// 
router.get('/test', restricted, async(req, res) => {
    PurchasesDB.getAll().then(purchases => {
        res.status(200).json(purchases)
    }).catch(err => {
        res.status(500).json({ message: "Failed to get purchases"})
    })
})

router.get('/:id', restricted, async(req, res) => {
    const id = req.params.id

    try {
        const purchase = await PurchasesDB.getbyID(id)

        res.status(200).json(purchase)
    } catch(err) {
        res.status(500).json({ message: "Failed to get purchase", err})
    }
})

router.get('/item/:id', restricted, async(req, res) => {
    const itemID = req.params

    try {
        const purchases = await PurchasesDB.getByItem(itemID)

        res.status(200).json(purchases)
    } catch(err) {
        res.status(500).json({ message: `Failed to get purchase ${itemID}` })
    }

})

router.get('/user/:id', restricted, async(req, res) => {
    const userID = req.params

    try {
        const purchases = await PurchasesDB.getByItem(userID)

        res.status(200).json(purchases)
    } catch(err) {
        res.status(500).json({ message: `Failed to get purchase` })
    }
})

router.post('/', restricted, async(req, res) => {
    const newPurchase = req.body

    try {
        const addedPurchase = await PurchasesDB.postNew(newPurchase)

        res.status(200).json(addedPurchase)
    } catch(err) {
        res.status(500).json({ message: "Failed to finalize purchase", err })
    }
})

router.put('/:id', restricted, async(req, res) => {
    const update = req.body
    const id = req.params.id

    try {
        await PurchasesDB.update(update)
        const updatedPurchase = await PurchasesDB.getByID(id)
        
        res.status(201).json(updatedPurchase)
    } catch(err) {
        res.status(500).json({ message: "Failed to update purchase", err })
    }
})
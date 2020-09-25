const express = require('express')
const router = express.router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const AuthDB = require('./auth-model.js')
const restrictedMid = require('./restricted.js')

// get post put delete
// Read Create Update Delete

router.get('/', restrictedMid, async (req, res) => {
    try {
        const listOfAllUsers = await AuthDB.findAll();

        listOfAllUsers.forEach(user => {
            user.password = 'Didnt say the magic word'
        })

        res.status(200).json({listOfAllUsers})
    } catch(err) {
        res.status(500).json({ error: "Looks like something went wrong. Please check the request."})
    }
})
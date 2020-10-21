const server = require('../api/server.js')
const request = require('supertest')
const db = require('../database/dbConfig.js')
const itemModel = require('../router-items/item-model.js')

describe('purchases routes', () => {
    beforeEach( async() => {
        await db('purchases').truncate()
    })

    describe('GET to purchases', () => {
        it('should return all purchases from /', () => {
            request(server)
        })

        it('should return a single purchase from /:id', () => {
            request(server)
        })
    })

    describe('POST to purchases', () => {
        it('should return added purchase', () => {

        })
    })

    describe('PUT to purchases', () => {
        it('should return updated purchase from /:id', () => {

        })
    })

    describe('DELETE to purchases', () => {
        it('should return a number 1 from /:id', () => {

        })
    })
})
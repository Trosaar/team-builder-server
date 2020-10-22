const server = require('../api/server.js')
const request = require('supertest')
const db = require('../database/dbConfig.js')
const itemModel = require('../router-items/item-model.js')
const { expectCt } = require('helmet')

describe('purchases routes', () => {
    beforeEach( async() => {
        await db('purchases').truncate()
    })

    describe('GET to purchases', () => {
        it('should return all purchases from /', () => {
            request(server).get('/api/purchases').then(res => {
                expect(res.status).toBe(200)
            })
        })

        it('should return a single purchase from /:id', () => {
            request(server).get('/api/purchases/:id').then(res => {
                expect(res.status).toBe(200)
            })
        })
    })

    describe('POST to purchases', () => {
        it('should return added purchase', () => {
            const newPurchase = {
                // fill in
            }

            request(server).post('/api/purchases').send(newPurchase).then(res => {
                expect(res.status).tobe(200)
            })
        })
    })

    describe('PUT to purchases', () => {
        it('should return updated purchase from /:id', () => {
            const updates = {
                // fill in
            }

            request(server).put('/api/purchases/:id').send(updates).then(res => {
                expect(res.status).toBe(201)
            })
        })
    })

    describe('DELETE to purchases', () => {
        it('should return a number 1 from /:id', () => {
            request(server).delete('/api/purchases/:id').then(res => {
                expect(res.status).toBe(200)
            })
        })
    })
})
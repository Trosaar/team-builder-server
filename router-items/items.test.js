const { request } = require("express");

const server = require('../api/server.js')
const request = require('supertest')
const db = require('../database/dbConfig.js');

describe('items routes', () => {
    beforeEach( db('items').truncate() )

    describe('GET to items', () => {
        it('should return all item from /', () => {
            request(server).get('/api/items').then(res => {
                expect(res.status).toBe(200)
            })
        })

        it('should return one item from /:id', () => {
            request(server).get('/api/items/:id').then(res => {
                expect(res.status).toBe(200)
            })
        })
    })

    describe('POST to items', () => {
        it('should return added item from /', () => {
            const testItem = {
                
            }
            
            request(server).post('/api/items')
            .send(testItem).then(res => {
                expect(res.status).toBe(201)
            })
        })
    })

    describe('PUT to items', () => {
        it('should return the updated item', () => {

        })
    })

    describe('DELETE to items', () => {
        it('should return a number 1 from /:id')
    })
})
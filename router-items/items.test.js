const { request } = require("express");

const server = require('../api/server.js')
const request = require('supertest')
const db = require('../database/dbConfig.js')

describe('items routes', () => {
    beforeEach( db('items').truncate() )

    describe('GET to items', () => {
        it('should return all item from /', () => {

        })

        it('should return one item from /:id', () => {

        })
    })

    describe('POST to items', () => {
        it('should return added item from /', () => {

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
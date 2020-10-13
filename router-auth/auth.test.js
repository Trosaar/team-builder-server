const server = require('../api/server.js')
const request = require('supertest')
const db = require('../database/dbConfig.js')

describe('Auth Router', () => {
    beforeEach( db('users').truncate() )


    describe('get to /', () => {
        it('should return a list of all users if logged in', () => {
            return request(server).get('/api/auth')
        })
    })
})
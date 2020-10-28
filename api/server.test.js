const server = require('./server.js')
const request = require('supertest')

describe('Base route', () => {
    describe('GET to /', () => {
        it('should return html tag', () => {
            request(server).get('/').then(res => {
                expect(res.status).toBe(200)
            })
        })
    })
})

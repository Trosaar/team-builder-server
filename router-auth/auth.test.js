const server = require('../api/server.js')
const request = require('supertest')
const db = require('../database/dbConfig.js')

describe('Auth Router', () => {
    beforeEach( async () => {
        await db('users').truncate()
    })


    describe('GET to auth', () => {
        it('should return a list of all users if logged in', () => {
            request(server).get('/api/').then(res => {
                expect(res.status).toBe(401)
            })
        })
    })

    describe('POST to auth', ()=> {
        it('should return the token for a new user', () => {
            const user = {
                username: "test",
                password: "testpass"
            }

            request(server).post('/api/register')
            .send(user).then(res => {
                expect(res.status).toBe(201)
                expect(res.body.username).toBe("test")
            })
        })

        it('should return a token for existing user', () => {
            const user = {
                username: "test",
                password: "testpass"
            }
            
            request(server).post('/api/login')
            .send(user).then(res => {
                expect(res.status).toBe(200)
                expect(res.body).toContain(token)
            })
        })
    })

    xdescribe('PUT to auth', () => {

    })

    xdescribe('DELETE to auth', () => {

    })
})
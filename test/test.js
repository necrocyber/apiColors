const expect = require('chai').expect
const fetch = require('node-fetch')

const URL = 'http://localhost:3000/'

describe('Probando los servicios', () => {
    it('GET / Return Array/object JSON', async () => {
        const response = await fetch(URL + 'colores')
        expect(response.status).to.be.equal(200)
        const colores = await response.json()
        expect(colores).to.be.an("Array")
    })
})
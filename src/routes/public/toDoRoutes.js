const BASE = '/to-do/'

const responseObject = require('../../utils/responseObject')
const todoModule = require('../../modules/toDoModule')

module.exports = (app) => {

    app.post(`${BASE}new`, async function (req, res, next) {

        console.log(`-> [POST] ${req.originalUrl}`)

        let response = await todoModule.newToDoItem(req.body)

        console.log(`<- [POST] ${req.originalUrl}`)

        return responseObject(res, response.status, response.data, response.error)
    })

    app.put(`${BASE}edit-description/:id`, async function (req, res, next) {

        console.log(`-> [POST] ${req.originalUrl}`)

        let response = await todoModule.editDescription(req.params.id, req.body)

        console.log(`<- [POST] ${req.originalUrl}`)

        return responseObject(res, response.status, response.data, response.error)
    })

    app.put(`${BASE}set-as-done/:id`, async function (req, res, next) {

        console.log(`-> [POST] ${req.originalUrl}`)

        let response = await todoModule.setAsDone(req.params.id)

        console.log(`<- [POST] ${req.originalUrl}`)

        return responseObject(res, response.status, response.data, response.error)
    })

    app.delete(`${BASE}remove/:id`, async function (req, res, next) {

        console.log(`-> [POST] ${req.originalUrl}`)

        let response = await todoModule.remove(req.params.id)

        console.log(`<- [POST] ${req.originalUrl}`)

        return responseObject(res, response.status, response.data, response.error)
    })

    app.get(`${BASE}`, async function (req, res, next) {

        console.log(`-> [POST] ${req.originalUrl}`)

        let response = await todoModule.getAll()

        console.log(`<- [POST] ${req.originalUrl}`)

        return responseObject(res, response.status, response.data, response.error)
    })

}
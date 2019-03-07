// TO DO
const ToDoItemModel = require('../models/toDoItemModel').ToDoItemModel
// TO DO 

let newToDoItem = async (data)=>{
    let resp = {
        data: null,
        status: null,
        error: null
    }

    try {
        if(!data.description){
            resp.status = 400
            resp.error = "Invalid params"
            return resp
        }

        let toDoItem = await ToDoItemModel.insert(data.description)

        resp.status = 200
        resp.data = toDoItem
        
        return resp
    } catch (error) {
        resp.status = 500
        resp.error = error.message
        return resp
    }
}

let editDescription = async (id, data)=>{
    let resp = {
        data: null,
        status: null,
        error: null
    }

    try {
        if(!data.description || !id){
            resp.status = 400
            resp.error = "Invalid params"
            return resp
        }

        let toDoItem = await ToDoItemModel.update( id, description )

        resp.status = 200
        resp.data = toDoItem
        
        return resp
    } catch (error) {
        resp.status = 500
        resp.error = error.message
        return resp
    }
}

let setAsDone = async (id)=>{
    let resp = {
        data: null,
        status: null,
        error: null
    }

    try {
        if(!id){
            resp.status = 400
            resp.error = "Invalid params"
            return resp
        }

        let toDoItem = await ToDoItemModel.update( id )

        resp.status = 200
        resp.data = toDoItem
        
        return resp
    } catch (error) {
        resp.status = 500
        resp.error = error.message
        return resp
    }
}

let remove = async (id)=>{
    let resp = {
        data: null,
        status: null,
        error: null
    }

    try {
        if(!id){
            resp.status = 400
            resp.error = "Invalid params"
            return resp
        }

        await ToDoItemModel.delete( id )

        resp.status = 200
        resp.data = true
        
        return resp
    } catch (error) {
        resp.status = 500
        resp.error = error.message
        return resp
    }
}

let getAll = async ()=>{
    let resp = {
        data: null,
        status: null,
        error: null
    }

    try {

        let toDoItens = await ToDoItemModel.selectAll()

        resp.status = 200
        resp.data = toDoItens
        
        return resp
    } catch (error) {
        resp.status = 500
        resp.error = error.message
        return resp
    }
}

module.exports = {
    newToDoItem: async (data)=>{
        return await newToDoItem(data)
    },
    editDescription: async (id, data)=>{
        return await editDescription(id, data)
    },
    setAsDone: async (id)=>{
        return await setAsDone(id)
    },
    remove: async (id)=>{
        return await remove(id)
    },
    getAll: async ()=>{
        return await getAll()
    }

}
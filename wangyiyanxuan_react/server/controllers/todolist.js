const  todolist  = require( '../models/todolist.js')

const getTodolist = async function(ctx){//获取某个用户的所有todolist
    const id =  ctx.params.id;  //获取url里的id
    const result = await todolist.getTodolistById(id);//查询结果
    ctx.body = {
        success: true,
        result
    }
}

//给某个用户创建一条todolist
const createTodolist = async function(ctx) {
    const data = ctx.request.body;
    const success = await todolist.createTodolist(data)
    ctx.body = {
        success
    }
}

const removeTodolist = async function(ctx){
    
    const id = ctx.params.id;
    const userId = ctx.params.userId;
    console.log(id,userId,"+++++++++++++++")
    const success = await todolist.removeTodolist(id, userId)

    ctx.body = {
        success
    }
}

const updateTodolist = async function(ctx){
    const id = ctx.params.id;
    const userId = ctx.params.userId;
    let status = ctx.params.status;
    status === '0' ? status = true : status = false //状态反转（更新)
    console.log(id, userId, status,"+++++++++++++++")

    const success = await todolist.updateTodolist(id, userId, status);

    ctx.body = {
        success
    }
}

module.exports =  {
    getTodolist,
    createTodolist,
    removeTodolist,
    updateTodolist
}
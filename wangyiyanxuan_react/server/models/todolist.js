const db = require('../config/db.js')
const todoModel = '../schema/list.js';//引入user的表结构
const TodolistDb = db.Todolist;//引入数据库

const Todolist = TodolistDb.import(todoModel);// 用sequelize的import方法引入表结构

// 通过用户id得到todolist
const getTodolistById = async function(id){
    const todolist = await Todolist.findAll({ // 查找全部的todolist
        where: {
            user_id: id
        },
        attribute:['id', 'content', 'status']// 只需返回这三个字段的结果即可
    })
    return todolist//返回数据
}

//给某个用户创建一条todolist
const createTodolist = async function(data){
    await Todolist.create({
        user_id: data.id,
        content: data.content,
        status: data.status
    })
    return true
}

//删除用户事件记录
const removeTodolist = async function(id, user_id){
    const result = await Todolist.destroy({
        where: {
            id,
            user_id
        }
    })
    return result === 1
}

//更新事件列表
const updateTodolist = async function(id, user_id, status) {
    console.log(id, user_id, status,"---------------")
    const result = await Todolist.update(
            {
                status
            },
            {
                where: {
                    id,
                    user_id: user_id
                }
            }
    )
    return result[0] === 1
}

module.exports  = {
    getTodolistById,
    createTodolist,
    removeTodolist,
    updateTodolist
}
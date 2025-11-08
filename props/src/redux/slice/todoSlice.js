import { createSlice } from "@reduxjs/toolkit"
import { act } from "react"

const initialState = {
    todos:[
        {
            id:1,
            task:"I want to complete the redux today"
        }
    ]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{

        addTodo :(state,action)=>{

            // Create the new todo

            const newTodo = {
                task:action.payload.task,
                id:Date.now()
            }

            // Add the new todo into the state

            state.todos.push(newTodo)
        },

        removeTodo:(state,action)=>{

            const todoId = action.payload.todoId;

            state.todos=state.todos.filter((todo)=>todo.id!=todoId)


        },

        updateTodo :(state,action)=>{

            // find the todo

            const todo = state.todos.find((item)=>item.id == action.payload.id)

            if(todo){
                todo.task =action.payload.task;
            }
        }
    }
})
import { createContext, useState } from "react";

export const TodoContext = createContext({
    todoList:[],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{}
})

export const TodoProvider =({children})=>{

    const [todoList,setTodo] =useState([
        {
            id:1,
            task:"I want to complete the TODO Project Today",
            completed:false
        }
    ])

    const addTodo =(todo)=>{

        setTodo((previousTODO)=>{

            return [...previousTODO,{id:Date.now(),completed:false,task:todo}]
        })
    }

    const updateTodo =(todoId,newTask)=>{

        setTodo((previousTODO)=>{

            return previousTODO.map((todo)=>{
                    return todo.id == todoId ?{...todo,task:newTask} :todo
            })
        })
    }

    const deleteTodo =(todoId)=>{
        setTodo((prev)=>{
            return prev.filter((todo)=>todo.id!=todoId)
        })
    }

    return(
        <TodoContext.Provider value={{todoList,addTodo,updateTodo,deleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
}


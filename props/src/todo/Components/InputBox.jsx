import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const InputBox = () => {

    const [task,setTask] = useState("")

    const {addTodo,todoList} = useContext(TodoContext)

    const handleTask =()=>{
        if(task===""){
           return window.alert("Task is empty")
        }
        addTodo(task)

        setTask("")
        
    }

    return (
        <div className="flex items-center justify-center gap-3 w-full max-w-2xl mx-auto mt-8 px-4">
            <input
                type="text"
                placeholder="Enter the task"
                className="flex-1 text-lg px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm placeholder-gray-400"
                value={task} onChange={(e)=>setTask(e.target.value)}
            />
            <button
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 shadow-md" onClick={handleTask}
            >
                Add
            </button>
        </div>
    );
};

export default InputBox;

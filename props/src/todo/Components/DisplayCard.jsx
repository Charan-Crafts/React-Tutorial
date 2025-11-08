import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const DisplayCard = () => {
    const { todoList,updateTodo } = useContext(TodoContext);
    const [todos, setTodo] = useState([]);

    const [edit, setEdit] = useState(true);

    const [task,setTask]= useState("")

    useEffect(() => {
        setTodo(todoList);
    }, [todoList]);

    const handleEdit = (id) => {
        console.log(id);
        
        setEdit((prev)=>!prev)
        updateTodo(1,)
    }

    return (
        <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto mt-8">
            {todos && todos.length > 0 ? (
                todos.map((todo) => (
                    <div
                        key={todo.id}
                        className="bg-white shadow-md border border-gray-200 rounded-lg p-5 flex items-center justify-between hover:shadow-lg transition-all duration-300"
                    >
                        {/* Completed and Task Info */}
                        <div className="flex items-center gap-4 w-3/4">
                            <div className="flex flex-col items-center text-gray-700">
                                <label className="text-sm font-medium">Done</label>
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 accent-green-500 cursor-pointer"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <input className="text-lg font-semibold text-gray-800" value={todo.task} readOnly={edit} />

                            </div>
                        </div>

                        {/* Edit and Delete Buttons */}
                        <div className="flex gap-3">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition" onClick={()=>handleEdit(todo.id)} key={todo.id}>
                                {
                                    edit? "Edit": "Save"
                                }
                            </button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500 mt-6">No tasks available</p>
            )}
        </div>
    );
};

export default DisplayCard;

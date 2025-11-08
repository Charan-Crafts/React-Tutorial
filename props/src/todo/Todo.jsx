import React from 'react';
import { TodoProvider } from './context/TodoContext';
import DisplayCard from './Components/DisplayCard';
import InputBox from './Components/InputBox';
const Todo = () => {
    return (
        <TodoProvider>
            <div className='flex items-center flex-col bg-gray-100'>
                <div className='text-3xl text-center font-bold mt-4 h-screen bg-gray-50 w-1/2 flex flex-col items-center'>
                    <h1 className='mt-3 py-6'>Welcome to TO-DO application using Context API</h1>
                    <InputBox/>
                    <DisplayCard />
                </div>
            </div>
        </TodoProvider>
    );
}

export default Todo;

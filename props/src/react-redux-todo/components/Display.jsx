import React, { useState } from 'react';

const Display = () => {

    const todo = {
        task: "afafjkajfkafjalfkfjklfjakjkfajfadfghj"
    }

    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
        setEdit(prev => !prev)
    }

    return (
        <div className='bg-amber-50 w-3/4 mt-5 flex justify-between shadow-md p-3 rounded-2xl'>
            <input type="text" placeholder='' value={todo.task} className='bg-white-300 w-2/3 px-4 py-3 text-xl' readOnly={!edit} />

            <div className=' gap-4 w-1/3 flex justify-around'>
                <button className='bg-orange-300 px-8 rounded-2xl cursor-pointer active:bg-amber-300 duration- shadow-xl ' onClick={handleEdit}>
                    {
                        edit?"Save":"Edit"
                    }
                </button>
                <button className='bg-red-600 px-8 rounded-2xl cursor-pointer active:bg-red-400 duration- shadow-xl'>Delete</button>
            </div>
        </div>
    );
}

export default Display;

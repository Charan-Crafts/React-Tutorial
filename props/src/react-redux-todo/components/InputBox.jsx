import React from 'react';

const InputBox = () => {
  return (
    <div className='bg-amber-100 w-1/2 flex justify-evenly p-3 rounded-2xl shadow-lg'>
      <input type="text" name="" id="" className='w-3/4 py-2 text-xl font-extralight border-1 rounded-b-sm  overflow-hidden text-ellipsis shadow-md' placeholder='Type here .......' />

      <button className='bg-green-400 px-8 text-black rounded-full  active:bg-green-50 duration-200 cursor-pointer shadow-md'>Add</button>
    </div>
  );
}

export default InputBox;

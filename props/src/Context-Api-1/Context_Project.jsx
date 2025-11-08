import React from 'react';
import Login from './Components/Login';
import Logout from './Components/Logout';

const Context_Project = () => {
  return (
    <div className='bg-black h-screen flex  justify-center'>
      <div className='bg-white h-[70vh] w-1/2 mt-10 flex flex-col items-center'>
        <h1 className='text-2xl font-serif text-center p-4'>User login</h1>


        {/* Login form */}

        <Login />

        <div>
          <h1 className='text-5xl p-3 font-serif'>Hello User Welcome </h1>
        </div>

        <Logout/>
      </div>


    </div>
  );
}

export default Context_Project;

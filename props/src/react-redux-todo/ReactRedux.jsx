import React from 'react';
import InputBox from "./components/InputBox"
import Display from './components/Display';
const ReactRedux = () => {
  return (
    <div className='bg-black h-screen flex justify-center p-3'>
     <div className='bg-green-100 h-full w-10/12 flex flex-col items-center'>
        <h1 className='text-4xl p-5 text-center font-medium'>TODO Application using the React - Redux</h1>
        <InputBox/>
        <Display/>
     </div>
    </div>
  );
}

export default ReactRedux;

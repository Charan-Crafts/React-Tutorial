import React, { useContext, useRef, useState } from 'react';
import { userContext } from '../context/UserContext';

const Login = () => {

  const [userName,setUserName] = useState("")

  const [password,setPassword] = useState("")

  const {setUserInfo,userInfo} = useContext(userContext)

  const handleUserLogin = () => {
    
    console.log(userInfo);
    console.log("User details from the context");
    setUserInfo({userName,password})
    console.log(userInfo);
    

  }

  return (
    <div className='flex flex-col bg-green-50 w-1/2 justify-center items-center p-4'>
      <input type="text" name="" id="" placeholder='charan@gmail.com' className='w-full p-2 mb-4 border-2 rounded-2xl' onChange={(e)=>setUserName(e.target.value)} />

      <input type="password" name="" id="" placeholder='*****' className='w-full p-2 mb-4 border-2 rounded-2xl ' onChange={(e)=>setPassword(e.target.value)} />

      <button className='bg-black px-7 py-2 text-white rounded-2xl cursor-pointer active:bg-amber-100 duration-75' onClick={handleUserLogin}>Login</button>
    </div>
  );
}

export default Login;

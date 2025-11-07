import React, { useEffect, useRef, useState } from 'react';

import { useCallback } from 'react';
const PasswordGenerator = () => {

    const [length, setLength] = useState(8)

    const [number, setNumber] = useState(false)

    const [specialChar, setSpecialChar] = useState(false)

    const [password, setPassword] = useState("")

    const passwordRef = useRef()

    console.log("Special Character Enable :", specialChar);


    console.log("Number Enable :", number);


    const generatePassword = useCallback((length) => {
        console.log("Generating the password");

        let tempPassword = ""

        let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let numbers = "0123456789";

        let specialChars = "!@#$%^&*()_+[]{}|;:,.<>?/~`-=";

        if (specialChar) letters += specialChars

        if (number) letters += numbers

        for (let i = 0; i < length; i++) {

            let idx = Math.floor(Math.random() * letters.length)

            tempPassword += letters.charAt(idx)

        }


        setPassword(tempPassword)


    }, [number, specialChar,length])

    useEffect(() => {
        generatePassword(length)
    }, [number,specialChar,length])



    const copyPassword =()=>{
        window.navigator.clipboard.writeText(passwordRef.current.value)
        passwordRef.current.select()
    }

    return (
        <div className='h-screen bg-gray-500 flex flex-col items-center'>
            <h1 className='text-5xl font-serif text-center py-10 text-amber-100'>Password Generator</h1>
            <div className='h-[55vh] bg-white w-2/8 shadow-amber-50 outline-none px-2 flex  flex-col items-center'>
                <input type="text" placeholder='Your password' className='w-full p-3 mt-4 bg-amber-200 shadow-2xl rounded-2xl font-serif' value={password} ref={passwordRef} readOnly />



                <div className='flex w-full justify-between px-2 py-3 mt-4 text-xl'>
                    <input type="range" name="" id="" max={20} min={6} value={length} onChange={(e) => setLength(e.target.value)} />
                    <h1 className='text-xl font-serif'>Length : {length}</h1>
                </div>

                <div className='flex w-full justify-between px-2 py-3 mt-4 text-xl'>

                    <h1 className='text-xl font-serif'>Number  {number}</h1>
                    <input type="checkbox" name="" id="" className='w-20' onChange={() => setNumber((prev) => !prev)} />

                </div>

                <div className='flex w-full justify-between px-2 py-3 mt-4 text-xl'>

                    <h1 className='text-xl font-serif'>Special Character  {specialChar}</h1>
                    <input type="checkbox" name="" id="" className='w-20' onChange={() => setSpecialChar((pre) => !pre)} />

                </div>

                <button className='bg-amber-100 mt-3 font-serif px-10 py-3 w-1/2 rounded-full text-black  text-2xl cursor-pointer active:bg-green-200' onClick={copyPassword}>copy</button>
            </div>
        </div>
    );
}

export default PasswordGenerator;

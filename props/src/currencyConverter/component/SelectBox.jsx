import React, { useState } from 'react';

const SelectBox = (props) => {
    const {label,countryCode} = props


    return (
        <div >
            <h1 className='text-xl font-serif '>{label}</h1>
            <select name="" id="" className='mt-3'>
                {
                    countryCode && countryCode.map((curr,idx)=>(
                        <option value={curr} key={idx} className='w-fit'>
                            {curr}
                        </option>
                    ))
                }
            </select>

        </div>
    );
}

export default SelectBox;

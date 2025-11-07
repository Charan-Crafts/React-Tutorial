import React, { useEffect, useState } from 'react';
import SelectBox from './component/SelectBox';
import { ArrowRightLeft, IndianRupee } from 'lucide-react';
import useCurrencyHook from './Hooks/useCurrencyHook';

const CurrencyConvertor = () => {
  const [convertedAmount, setConvertedAmount] = useState(0);
  const data = useCurrencyHook("inr");
  const [countryCode, setCountryCode] = useState([]);

 console.log(Object.keys(data));
 

  return (
    <div className='h-screen bg-amber-50 flex flex-col items-center justify-center'>
      <div className='bg-gray-300 h-[70vh] w-1/2 mt-10'>
        <h1 className='text-black text-center text-6xl font-serif font-extrabold py-3'>
          Currency Converter
        </h1>

        <div className='flex p-4 items-center justify-around mt-6'>
          {/* Enter the Amount */}
          <div className='flex flex-col'>
            <label className='text-2xl font-serif text-green-400 mb-3'>
              Amount
            </label>
            <input
              type='text'
              className='w-full p-2 border-2 rounded-2xl'
              placeholder='Enter Amount'
            />
          </div>

          {/* From */}
          <SelectBox label='from' countryCode={Object.keys(data)} />
          <ArrowRightLeft />
          <SelectBox label='to' countryCode={Object.keys(data)} />
        </div>

        {/* Button */}
        <div className='flex items-center justify-center w-2/4 mx-auto mt-6 p-4 border-2 border-emerald-400 rounded-full bg-emerald-50 shadow-md hover:shadow-lg transition-shadow duration-300'>
          <IndianRupee size={48} strokeWidth={2.25} className='text-emerald-600' />
        </div>

        {/* Converted amount */}
        <h1 className='text-3xl font-serif mt-4 px-4'>Converted Amount</h1>
        <h1 className='text-3xl font-serif mt-4 px-4'>{convertedAmount}</h1>
      </div>
    </div>
  );
};

export default CurrencyConvertor;

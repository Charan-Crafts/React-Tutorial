import React from 'react';

const Card = ({patient}) => {

  return (
    <div className='bg-gray-400 w-2/8 flex flex-col p-4 gap-10 rounded-xl mt-10'  >
      <h1 className='text-4xl font-extrabold'>{patient.name}</h1>

      <h1 className='text-amber-100 text-2xl'>{patient.diagnosedWith}</h1>

      <h1 className='text-amber-300 text-xl'>{patient.details}</h1>
    </div>
  );
}

export default Card;

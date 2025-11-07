import React from 'react';

const Bar = ({colors,setBackground}) => {

    const colorsArr = colors;



    const handleChange=(e)=>{

        console.log(e.target.name);
        
        setBackground(e.target.name);
    }
    return (
        <div className='bg-white '>
            <h1 className='font-serif text-black-50 text-2xl text-center p-2'>Choose the Background</h1>
            <div className='flex  text-xl justify-around'>
                {
                    colorsArr.map((color, idx) =>
                        <button key={idx} className={`bg-${color}-500 cursor-pointer text-black-50 px-10 py-2 mb-4 rounded-xl outline-none font-sans`} onClick={(e)=>handleChange(e)} name={color}>{color}</button>
                    )

                }

            </div>
        </div>
    );
}

export default Bar;

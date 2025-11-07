import React, { useState } from 'react';
import Bar from './Components/Bar';

const Main = () => {
    const colors =[
        "blue",
        "teal",
        "pink",
        "cyan",
        "purple"
    ]

    const [background,setBackground]=useState("gray");

    console.log(background);
    
  return (
    <div className={`bg-${background}-500 h-screen`}>
      <Bar colors={colors} setBackground={setBackground}/>
    </div>
  );
}

export default Main;

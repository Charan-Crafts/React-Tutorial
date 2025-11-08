import React from 'react';
import { useParams } from 'react-router-dom';


const CustomPage = () => {

    const {param}= useParams()
  return (
    <div>
      <h1>Hello User :{param}</h1>
    </div>
  );
}

export default CustomPage;

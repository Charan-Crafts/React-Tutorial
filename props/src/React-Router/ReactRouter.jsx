import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import CustomPage from './CustomPage';
const ReactRouter = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}></Route>
        <Route path="/user/:param" element={<CustomPage/>}></Route>
      </Routes>
    </>
  );
}

export default ReactRouter;

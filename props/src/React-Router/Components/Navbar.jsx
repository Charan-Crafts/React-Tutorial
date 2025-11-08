import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='h-[10vh] bg-black text-white text-2xl flex items-center justify-around'>
            <NavLink to="/" className='text-xl'

                style={({ isActive }) => ({
                    color: isActive ? "red" : "white"
                })}
            >

                Home
            </NavLink>

            <NavLink to="/about" className='text-xl'

                style={({ isActive }) => ({
                    color: isActive ? "red" : "white"
                })}
            >

                About
            </NavLink>

        </div>
    );
}

export default Navbar;

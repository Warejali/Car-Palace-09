import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <nav className='bg-slate-700 text-white h-20 flex items-center justify-around'>
            <h3 className='text-3xl text-white uppercase font-bold'>Car Palace</h3>
            <ul className='flex items-center uppercase gap-10'>
                <li><CustomLink to="/">Home</CustomLink></li>
                <li><CustomLink to="/reviews">Reviews</CustomLink></li>
                <li><CustomLink to="/dashboard">Dashboard</CustomLink></li>
                <li><CustomLink to="/blogs">Blogs</CustomLink></li>
                <li><CustomLink to="/about">About</CustomLink></li>
            </ul>
        </nav>
    );
};

export default Header;
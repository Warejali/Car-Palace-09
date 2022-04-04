import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='bg-slate-700 text-white h-20 flex items-center justify-around'>
            <h3 className='text-3xl text-white uppercase font-bold'>Car Palace</h3>
            <ul className='flex items-center uppercase gap-10'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
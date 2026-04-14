import React from 'react';
import { Link, NavLink } from 'react-router';
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";



const Navbar = () => {
    return (
        <div className='shadow sticky top-0 bg-white'>
            <div className='flex justify-between w-10/12 mx-auto '>
                <div className='text-black font-bold py-2'> 
                    <h2>Keen<span className='text-[#244d3f]'>Keeper</span></h2>
                </div>

                <div className='text-[#64748b] text-[12px] '>
                    <button className='px-2 py-2  '>
                        <NavLink to='/' 
                        className={({ isActive }) => (
                        `flex items-center gap-1 ${
                         isActive ? 'bg-[#244d3f] text-white px-2 py-1 font-bold rounded-md' : ''}`
                        )}>
                        <RiHome2Line />
                        Home</NavLink>
                    </button>

                    <button className='px-2 py-2'>
                        <NavLink to={"/timeLine"}
                        className={({isActive})=>`
                        flex items-center gap-1
                        ${isActive? 'bg-[#244d3f] text-white px-2 py-1 font-bold rounded-md' : ''}
                        `}
                        >
                        <IoTimeOutline />
                        Timeline</NavLink>
                    </button>

                    <button className='px-2 py-2'>
                        <NavLink to={'/state'}
                        className={({isActive})=>`
                        flex items-center gap-1
                        ${isActive? 'bg-[#244d3f] text-white px-2 py-1 font-bold rounded-md' :''}
                        `} 
                        >
                        <FaChartLine />
                        Stats</NavLink>
                    </button>
                    
                </div>
            </div>
        </div>
    );
}

export default Navbar;

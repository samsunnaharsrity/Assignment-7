import React from 'react';
import { Link, NavLink } from 'react-router';
import vectorImg from '../../assets/image/vector.png'
import clickImg from '../../assets/image/clock.png'
import chartlineImg from '../../assets/image/chartline.png'

const Navbar = () => {
    return (
        <div className='shadow'>
            <div className='flex justify-between w-10/12 mx-auto '>
                <div className='text-black font-bold py-2'> 
                    <h2>Keen<span className='text-[#244d3f]'>Keeper</span></h2>
                </div>

                <div className='text-[#64748b] text-[12px] '>
                    <button className='px-2 py-2  '>
                        <NavLink to='/' 
                        className={({ isActive }) => (
                        `flex items-center gap-1 ${
                         isActive ? 'bg-[#244d3f] text-white px-2 py-1 font-bold' : ''}`
                        )}>
                        <img className='w-[12px] h-[12px] ' src={vectorImg} alt="vectorImg" />

                        Home</NavLink>
                    </button>

                    <button className='px-2 py-2'>
                        <NavLink to={"/timeLine"}
                        className={({isActive})=>`
                        flex items-center gap-1
                        ${isActive? 'bg-[#244d3f] text-white px-2 py-1 font-bold' : ''}
                        `}
                        >
                        <img className='w-[12px] h-[12px]' src={clickImg} alt="clickImg" />
                        Timeline</NavLink>
                    </button>

                    <button className='px-2 py-2'>
                        <NavLink to={'/state'}
                        className={({isActive})=>`
                        flex items-center gap-1
                        ${isActive? 'bg-[#244d3f] text-white px-2 py-1 font-bold' :''}
                        `} 
                        >
                        <img className='w-[12px] h-[12px]' src={chartlineImg} alt="chartlineImg" />
                        Stats</NavLink>
                    </button>
                    
                </div>
            </div>
        </div>
    );
}

export default Navbar;

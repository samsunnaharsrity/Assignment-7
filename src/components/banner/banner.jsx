import React from 'react';
import { FaPlus } from "react-icons/fa6";


const Banner = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center p-10 text-center space-y-3'>
                <h2 className='font-bold text-3xl '>Friends to keep close in your life</h2>
                <p className='text-[#64748b] text-[12px]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.</p>
                <button className='btn bg-[#244d3f] text-white mt-3'>
                    <FaPlus />
                    Add a Friend
                </button>
            </div>
        </div>
    );
}

export default Banner;

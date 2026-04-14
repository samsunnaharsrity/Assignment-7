import React from 'react';
import { FaPlus } from "react-icons/fa6";


const Banner = () => {
    return (
        <div className='w-8/12 mx-auto border-b border-gray-100 mb-5'>
            <div className='flex flex-col items-center justify-center p-10 text-center space-y-3'>
                <h2 className='font-bold text-3xl '>Friends to keep close in your life</h2>
                <p className='text-[#64748b] text-[12px]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.</p>
                <button className='btn bg-[#244d3f] text-white mt-3'>
                    <FaPlus />
                    Add a Friend
                </button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mb-5'>
                <div className='rounded-md shadow text-center py-3'>
                    <p className='text-xl font-bold'>10</p>
                    <p className='text-[#64748b] text-[12px]'>Total Friends</p>
                </div>
                <div className='rounded-md shadow text-center py-3'>
                    <p className='text-xl font-bold'>3</p>
                    <p className='text-[#64748b] text-[12px]'>On Track</p>
                </div>
                <div className='rounded-md shadow text-center py-3'>
                    <p className='text-xl font-bold'>6</p>
                    <p className='text-[#64748b] text-[12px]'>Need Attention</p>
                </div>
                <div className='rounded-md shadow text-center py-3'>
                    <p className='text-xl font-bold'>12</p>
                    <p className='text-[#64748b] text-[12px]'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;

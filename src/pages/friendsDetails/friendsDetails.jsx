import React, { Activity, useContext, useState } from 'react';
import { useParams } from 'react-router';
import FetchData from '../../hooks/FetchData';
import { PacmanLoader } from 'react-spinners';
import { FiArchive } from "react-icons/fi";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { FriendsDataContext } from '../../context/contextProvider';
import { toast } from 'react-toastify';


const FriendsDetails = () => {

const {id} = useParams()
console.log(id);
const {friendsData , loading} = FetchData()
console.log(friendsData , loading);


const findingFriends = friendsData.find((friend) => friend.id === Number(id))
console.log(findingFriends);


const {timeLine , setTimeLine} = useContext(FriendsDataContext)

//toastify

const showToast = (type )=>{
    if(type === 'success'){
        toast.success (`${type}`)
    }
    else{
        return
    }
}

const handleCall = (type) =>{
    console.log(handleCall);
    const newTime = {
        type: type,
        time: new Date().toLocaleDateString('en-US',
            {
                month:'short',
                day: 'numeric',
                year: 'numeric'
            }
        ),
        name: findingFriends.name,
    }

    setTimeLine((activity) => [ ...activity,newTime])
    toast.success(`${type} added for ${findingFriends.name}`)
}

            //loading
if (loading){
    return (
                <div className='flex h-full items-center justify-center p-20'>
                    <PacmanLoader color='#244d3f' />
                </div>
            )
}

    return (
        <div className='my-10 gap-4 lg:flex w-10/12 mx-auto justify-center '>
            {/* left side */}
            <div className='space-y-3 w-full lg:w-[30%] mb-5'>
            <div className='shadow rounded-md py-6 space-y-2 p-5 '>
                    <div className='flex items-center justify-center'>
                        <img className='w-[45px] h-[45px] rounded-full' src={findingFriends.image} alt="image" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <h2 className='font-bold text-md'>{findingFriends.name}</h2>
                    </div>


                {/* status btn list */}
            <div className='flex items-center justify-center'>
                <button className={` text-white rounded-3xl text-[10px] px-2 py-1 
                        ${
                            findingFriends.status === "Almost Due" ? "bg-[#efad44]":
                            findingFriends.status === "Overdue" ? "bg-[#ef4444]":
                            'bg-[#244d3f]'
                        }
                        `}>
                        {findingFriends.status}  
                </button>
            </div>
                {/* tag btn list */}
                <div>
                    <div>
                        <button className='flex gap-2 w-full justify-center' >
    
                        {
                            findingFriends.tags.map((tag,index)=>(
                                <span key={index} className='bg-green-200 rounded-3xl text-[8px] px-2 py-1'>
                                    {tag}
                                </span>
                            ))
                        }
                        </button>
                    </div>
                </div>

                <div className='flex justify-center text-[#64748b] text-[10px] text-center font-bold'>
                    {findingFriends.bio}  
                </div>

                <div className='flex justify-center text-[#64748b] text-[10px]'>
                    {findingFriends.email}  
                </div>
            </div>

            <div className='space-y-3 items-center justify-center'>
                <div className='flex justify-center text-center text-[12px] py-1 shadow rounded-md'>
                    <div className='flex items-center gap-2'>
                    <HiOutlineBellSnooze />
                    Snooze 2 weeks                            
                    </div>
                </div>

                <div className='flex justify-center text-[12px] py-1 shadow rounded-md'>
                    <div className='flex items-center gap-2'>
                        <FiArchive />
                        Archive
                    </div>
                </div>

                <div className='flex justify-center text-[12px] py-1 shadow rounded-md'>
                    <div className='flex items-center text-red-500 gap-2'>
                        <MdDeleteOutline />
                        Delete
                    </div>
                </div>
            </div>            
                
            </div>

        
            {/* right side */}
            <div className='max-w-60% space-y-10'>

                <div className='flex gap-4'>
                    <div className='shadow p-4 rounded-md text-center'>
                        <h2 className='text-[#244d3f] text-[20px] font-semibold'>{findingFriends.lastContact}</h2>
                        <p className='text-[#64748b] text-[10px] font-semibold '>Days Since Contact</p>
                    </div>
                    <div className='shadow p-4 rounded-md text-center'>
                        <h2 className='text-[#244d3f] text-[20px] font-semibold'>{findingFriends.goalDays}</h2>
                        <p className='text-[#64748b] text-[10px] font-semibold '>Goal (Days)</p>
                    </div>
                    <div className='shadow p-4 rounded-md text-center'>
                        <h2 className='text-[#244d3f] text-[20px] font-semibold'>{`${ new Date().toLocaleDateString()}`}</h2>
                        <p className='text-[#64748b] text-[10px] font-semibold '>Next Due</p>
                    </div>
                </div>


                <div className='shadow p-3 rounded-md space-y-4'>
                    <div className='flex justify-between '>
                        <h2 className='text-[#244d3f] font-semibold'>Relationship Goal</h2>
                        <button className='bg-gray-100 px-3 py-1 rounded-sm text-[10px]'>Edit</button>
                    </div>
                    <div>
                        <h2 className='text-[#64748b] text-[10px] '>Connect every <span className='font-bold'>{findingFriends.goalDays} days</span></h2>
                    </div>
                </div>


                <div className='shadow p-3 rounded-md space-y-4'>
                    <div>
                        <h2 className='text-[#244d3f] font-semibold'>Quick Check-In</h2>
                    </div>

                    <div className='flex justify-between items-center '>

                    <button className='shadow rounded-md text-center px-10 py-3'
                         onClick={() => handleCall('Call')}>   
                        <IoCallOutline className='text-[20px]'/>
                            <p className='text-[#64748b] text-[10px]'>Call</p>
                    </button>

                    <button className='shadow rounded-md text-center px-10 py-3'
                        onClick={() => handleCall('Text')}>
                        <MdOutlineTextsms className='text-[20px]'/>
                        <p className='text-[#64748b] text-[10px]'>
                            Text
                        </p>
                    </button>
                    
                    <button className='shadow rounded-md text-center px-10 py-3'
                        onClick={() => handleCall('Video')}>
                        <IoVideocamOutline className='text-[20px]'/>
                        <p className='text-[#64748b] text-[10px]'>Video</p>
                    </button>

                    </div>    
                </div>

            </div>
        </div>
    );
}

export default FriendsDetails;

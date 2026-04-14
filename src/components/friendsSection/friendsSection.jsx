import React, { useEffect, useState } from 'react';
import FriendsCard from '../ui/friendscard';
import { PacmanLoader } from 'react-spinners';
import { Link } from 'react-router';

const FriendsSection = () => {

const [friendsData , setFriendsData] = useState([])
const [loading , setLoading] = useState(true)

useEffect(()=>{

    const dataFetch = async()=>{
        const res = await fetch('/friends.json')
        const friends = await res.json();
        console.log(friends);

        setTimeout(() => {
            
            setFriendsData(friends)
            setLoading(false)
        }, 1500);
    }

    dataFetch()
},[])

console.log('friendsData:',friendsData,loading);

    return (
        <div className='w-8/12 mx-auto mb-10 '>
            <div>
                <h2 className='text-xl font-bold'>Your Friends</h2>
            </div>
            friends = {friendsData.length}


        {
            loading ? (
                <div className='flex h-full items-center justify-center p-20'>
                    <PacmanLoader color='#244d3f' />
                </div>
            ):
            <div className='grid grid-cols-4 gap-4 text-center items-center justify-center space-y-3'>
        
            {
                friendsData.slice(0,8).map((friend,index)=>
                   <FriendsCard friend={friend} index={index}></FriendsCard>
                // <div key={index} className='shadow rounded-2xl py-6'>
                //     <div className='flex items-center justify-center'>
                //         <img className='w-[45px] h-[45px] rounded-full ' src={friend.image} alt="image" />
                //     </div>

                //     <div><p className='font-bold text-md'>{friend.name}</p></div>
                //     <div><p className='text-[#64748b] text-[10px]'>{friend.lastContact}</p></div>

                //     {/* tag btn list */}
                //     <div>
                //         <button className='flex gap-2 w-full justify-center' >
                //         {
                //             friend.tags.map((tag,index)=>(
                //                 <span key={index} className='bg-green-200 rounded-3xl text-[8px] px-2 py-1'>
                //                     {tag}
                //                 </span>
                //             ))
                //         }
                //         </button>
                //     </div>

                //     {/* status btn list */}
                //     <div>
                //         <button className={` text-white rounded-3xl text-[10px] px-2 py-1
                //             ${
                //                 friend.status === "Almost Due" ? "bg-[#efad44]":
                //                 friend.status === "Overdue" ? "bg-[#ef4444]":
                //                 'bg-[#244d3f]'
                //             }
                //             `}>
                //             {friend.status}
                //         </button>
                //     </div>

                // </div>
                )
            } 
        </div>
        }

        {/* <Link>
            <button className=''>View All</button>
        </Link> */}
        </div>
    );
}

export default FriendsSection;

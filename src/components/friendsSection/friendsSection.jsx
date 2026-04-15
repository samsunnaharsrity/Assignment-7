import React, { useEffect, useState } from 'react';
import FriendsCard from '../ui/friendscard';
import { PacmanLoader } from 'react-spinners';
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import FetchData from '../../hooks/FetchData';

                    // main section of friends data

const FriendsSection = () => {

                    //custom hooks    
const {friendsData , loading} = FetchData()
console.log(friendsData , loading);

// const [friendsData , setFriendsData] = useState([])
// const [loading , setLoading] = useState(true)
const [viewAll , setViewAll] = useState(false)


const viewAllFriends = viewAll ?  friendsData : friendsData.slice(0,8)

// useEffect(()=>{

//     const dataFetch = async()=>{
//         const res = await fetch('/friends.json')
//         const friends = await res.json();
//         console.log(friends);

//         setTimeout(() => {
            
//             setFriendsData(friends)
//             setLoading(false)
//         }, 1000);
//     }

//     dataFetch()
// },[])

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
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 text-center items-center justify-center space-y-3'>
        
            {
                viewAllFriends.map((friend,index)=>
                   <FriendsCard friend={friend} key={index}></FriendsCard>
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
                {/* all friends view btn */}
        <div className='text-center'>

            <button className='btn bg-[#244d3f] text-white mt-3 hover:bg-[#427a67]'
            onClick={()=> setViewAll(!viewAll)}
            >
                {viewAll? 
                <div className='flex items-center gap-2'> 
                    <IoIosArrowUp />
                    View Less
                </div> : 
                <div className='flex items-center gap-2'>
                    <MdOutlineKeyboardArrowDown /> 
                    View More
                </div>
                }
            </button>         
        </div>
        </div>
    );
}

export default FriendsSection;

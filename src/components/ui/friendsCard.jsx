import React from 'react';

//custom data from main id
//show data ui 
const FriendsCard = ({index ,friend}) => {
    return (
        <div>
            <div key={index} className='shadow rounded-2xl py-6 space-y-2'>
                <div className='flex items-center justify-center'>
                    <img className='w-[45px] h-[45px] rounded-full ' src={friend.image} alt="image" />
                </div>

                <div><p className='font-bold text-md'>{friend.name}</p></div>
                <div><p className='text-[#64748b] text-[10px]'>{friend.lastContact}</p></div>

                {/* tag btn list */}
                <div>
                    <button className='flex gap-2 w-full justify-center' >
                    {
                        friend.tags.map((tag,index)=>(
                            <span key={index} className='bg-green-200 rounded-3xl text-[8px] px-2 py-1'>
                                {tag}
                            </span>
                        ))
                    }
                    </button>
                </div>

                {/* status btn list */}
                <div>
                    <button className={` text-white rounded-3xl text-[10px] px-2 py-1
                        ${
                            friend.status === "Almost Due" ? "bg-[#efad44]":
                            friend.status === "Overdue" ? "bg-[#ef4444]":
                            'bg-[#244d3f]'
                        }
                        `}>
                        {friend.status}
                    </button>
                </div>

            </div>            
        </div> 
    );
}

export default FriendsCard;


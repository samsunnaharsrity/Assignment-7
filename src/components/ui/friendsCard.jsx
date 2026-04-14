import React from 'react';

const FriendsCard = ({index ,friend}) => {
    return (
        <div>
            <div key={index} className='shadow rounded-2xl py-6 space-y-2'>
                <div className='flex items-center justify-center'>
                    <img className='w-[45px] h-[45px] rounded-full ' src={friend.image} alt="image" />
                </div>

                <div><p className='font-bold text-md'>{friend.name}</p></div>
                <div><p className='text-[#64748b] text-[10px]'>{friend.lastContact}</p></div>



            </div>            
        </div> 
    );
}

export default FriendsCard;


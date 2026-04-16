import React, { useContext, useState } from 'react';
import { FriendsDataContext } from '../../context/contextProvider';
import FetchData from '../../hooks/FetchData';
import { PacmanLoader } from 'react-spinners';
import { IoCallOutline, IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';


const icons ={
        call: <IoCallOutline />,
        text: <MdOutlineTextsms />,
        video: <IoVideocamOutline />,
}

const TimeLine = () => {
    const {timeLine , setTimeLine} = useContext(FriendsDataContext)
    console.log(timeLine , setTimeLine, 'contextData');
    
    //fetch data import
    const {friendsData , loading} = FetchData()
    console.log(friendsData , loading);
    

    //filtered data
    const [filterData, setFilterData ] = useState('All')
    
    const filteredAllData = filterData === '' || filterData === 'All'?
        timeLine : 
        timeLine.filter(item => item.type === filterData)




                //loading
if (loading){
    return (
                <div className='flex h-full items-center justify-center p-20'>
                    <PacmanLoader color='#244d3f' />
                </div>
            )
}

//console.log(timeLine);


    return (
        <div className='w-8/12 mx-auto my-15 '>

            <select onChange={(event)=> setFilterData(event.target.value)}
            className="input cursor-pointer mb-5 w-[200px] h-[25px] text-[#64748b] text-[13px] border-none shadow" 
            type="text"
            placeholder="Filter Timeline" 
            value={filterData} >
            <option value="">Filter Timeline Data</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
            </select>


        <div className='shadow rounded-md p-5'>   
            <h2 className='font-bold text-xl mb-5'>Time Line</h2>

            <div className='space-y-5'>
                {
                filteredAllData?.length === 0 ? (
                <p className='flex h-full items-center justify-center p-20 text-xl font-bold text-[#244d3f]'>
                    No data on this page now!
                </p>
                ) :
                ( filteredAllData?.map((findingFriends,index) =>(
                    <div key={index} className='shadow p-2 rounded-md '>
                        <div className='flex items-center'>
                            <div className='flex items-center text-[20px] px-3'>
                                {icons[findingFriends.type.toLowerCase()]}
                            </div>
                            
                            <div>
                                <p className='text-[13px] font-semibold'>{findingFriends.type}
                                     <span className='text-[#64748b] text-[10px]'> with {findingFriends.name}
                                    </span>
                                </p>
                                <p className='text-[10px]'>{findingFriends.time}</p>
                            </div>
                        </div>
                        <p></p>
                    </div>
                    )
                    ))
                }
            </div>
        </div>

        </div>
    );
}

export default TimeLine;

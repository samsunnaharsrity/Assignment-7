import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendsDataContext } from '../../context/contextProvider';
import { CiLineHeight } from 'react-icons/ci';
import FetchData from '../../hooks/FetchData';
import { PacmanLoader } from 'react-spinners';


const Stats = () => {

const {timeLine , setTimeLine} = useContext(FriendsDataContext)
const {friendsData , loading} = FetchData()
console.log(friendsData);


//loading
if (loading){
    return (
                <div className='flex h-full items-center justify-center p-20'>
                    <PacmanLoader color='#244d3f' />
                </div>
            )
}

const callCount = timeLine.filter(item => item.type === 'Call').length;
const textCount = timeLine.filter(item => item.type === 'Text').length;
const videoCount = timeLine.filter(item => item.type === 'Video').length;

const data = [
  { name: 'Call', value: callCount  , fill: '#0088FE' },
  { name: 'Text', value: textCount, fill: '#00C49F' },
  { name: 'Video', value: videoCount, fill: '#244d3f' },
];
    
    return (
        <div className='my-10'>
            <h2 className='font-bold text-2xl w-8/12 mx-auto mb-5'>Friendship Analytics</h2>
            
        <div className=' rounded-md p-5 shadow w-8/12 mx-auto'>
            <h2 className='text-[#244d3f] text-[20px] font-semibold '>By Interaction Type</h2>

            {
                timeLine.length === 0 ? (
                    <h2 className='flex h-full items-center justify-center p-20 text-3xl font-bold text-[#244d3f]'>
                        No Data Here
                    </h2>
                ):


            (<PieChart style={{ width: '100%', maxHeight: '50vh', aspectRatio: 2 }} responsive>
                <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={data}
                cx="50%"
                cy="100%"
                outerRadius="120%"
                margin = "auto"
                label
                isAnimationActive={true}
                />
            <Legend iconType='circle'></Legend>
            <Tooltip></Tooltip>
            </PieChart>)
            }            
        </div>
        </div>
    );

}
export default Stats;

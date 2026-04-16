import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendsDataContext } from '../../context/contextProvider';
import { CiLineHeight } from 'react-icons/ci';
import FetchData from '../../hooks/FetchData';



const Stats = () => {

const {timeLine , setTimeLine} = useContext(FriendsDataContext)
const {friendsData , loading} = FetchData()
console.log(friendsData);


const callCount = timeLine.filter(item => item.type === 'Call').length;
const textCount = timeLine.filter(item => item.type === 'Text').length;
const videoCount = timeLine.filter(item => item.type === 'Video').length;

const data = [
  { name: 'Call', value: callCount  , fill: '#0088FE' },
  { name: 'Text', value: textCount, fill: '#00C49F' },
  { name: 'Video', value: videoCount, fill: '#244d3f' },
];
    
    return (
        <div className='my-10 rounded-md p-5 shadow w-8/12 mx-auto'>
            <h2 className='text-[#244d3f] text-[20px] font-semibold '>By Interaction Type</h2>

        <PieChart style={{ width: '100%', maxHeight: '50vh', aspectRatio: 2 }} responsive>
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
    <Legend></Legend>
    <Tooltip></Tooltip>
    </PieChart>
        </div>
    );

}
export default Stats;

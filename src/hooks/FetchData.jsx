import React, { useEffect, useState } from 'react';



const FetchData = () => {
const [friendsData , setFriendsData] = useState([])
const [loading , setLoading] = useState(true)
// const [viewAll , setViewAll] = useState(false)


// const viewAllFriends = viewAll ?  friendsData : friendsData.slice(0,8)

useEffect(()=>{

    const dataFetch = async()=>{
        const res = await fetch('/friends.json')
        const friends = await res.json();
        console.log(friends);

        setTimeout(() => {
            
            setFriendsData(friends)
            setLoading(false)
        }, 1000);
    }

    dataFetch()
},[])


    return (
        {friendsData, loading}
    );
}

export default FetchData;

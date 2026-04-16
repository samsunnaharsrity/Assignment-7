import { createContext, useState } from "react";


export const FriendsDataContext = createContext() 
export const ContextProvider = ({children}) => {
    
const [timeLine , setTimeLine] = useState([]);


const data = {
  timeLine,
  setTimeLine,

}
    return (
        <FriendsDataContext.Provider value={data}>
            {children}
        </FriendsDataContext.Provider>
    );
}

export default ContextProvider;

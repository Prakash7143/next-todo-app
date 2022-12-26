import React, { ReactNode, createContext, useContext, useState } from "react";


interface MainContextProviderProps {
    children: ReactNode
}

const MakeContext =  createContext<any>(null);

export const mainContext = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useContext(MakeContext);
}

const MainContext =  ({ children }:MainContextProviderProps ) => {
    const [todoList, setTodoList] = useState([]);

    const store = {
        todoList,
        setTodoList
    }
    return (
        
        <MakeContext.Provider value={store}> 
            {children}
        </MakeContext.Provider>
    )
}

export default MainContext;
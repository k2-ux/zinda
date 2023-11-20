import { View, Text } from 'react-native'
import React,{useState,useContext,createContext} from 'react'


const DarkModeContext = createContext()
export const DarkModeProvider = ({children}) => {

const[darkMode,setDarkMode] = useState(null)
const updateDarkMode = e =>{
    setDarkMode(e)
}

  return (
    <DarkModeContext.Provider value={{updateDarkMode,darkMode}}>
        {children}
    </DarkModeContext.Provider>
  )
}

export const  useDarkModeContext  =()=>{
    return useContext(DarkModeContext)
}
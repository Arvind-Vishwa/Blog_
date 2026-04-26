import React from 'react'
import { createContext } from 'react'

export const data=createContext();

const ContextData = (props) => {

    const login=(data)=>{
        
    }

  return (
    <div>
      <data.Provider>
      {props.children}
      </data.Provider>
    </div>
  )
}

export default ContextData

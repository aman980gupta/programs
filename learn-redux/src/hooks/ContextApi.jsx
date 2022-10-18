import React, { createContext } from 'react'

const dataConext = createContext({});

const ContextApi = ({children}) => {

  return (
    <dataConext.Provider value={{

    }}>
        {children}
    </dataConext.Provider>
  )
}

export default ContextApi

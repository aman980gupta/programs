import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {changeColor} from "../redux1/theme"

const ChangeColor = () => {
    const dispatch = useDispatch()
    
    const [color,setColor] = useState("")
  return (
    <>
        <input type="text" onChange={e=>setColor(e.target.value)}/>
        <button onClick={()=>dispatch(changeColor(color))}>Change color</button>
    </>
  )
}

export default ChangeColor

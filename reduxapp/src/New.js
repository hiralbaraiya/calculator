import React from 'react'

export const New =(props)=>{
    console.log()
    return(
        
        <button onClick={()=>props.dispatch({type:'INCREMENT'})}>{props.value}</button>
       
    )
}
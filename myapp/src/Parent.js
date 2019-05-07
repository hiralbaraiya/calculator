import React from 'react'
import Child from './Child'
import {SecChild} from './SecChild'
import {ThemeContext} from './Theme'

export const  Parent = ()=>{
return(
    <div>
    <ThemeContext.Consumer>
    {context=><p>parent {context}</p>}
    </ThemeContext.Consumer>
    <Child></Child>
    <SecChild></SecChild>
   </div>
)
}


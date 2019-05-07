import React, { useContext} from 'react'
import { ThemeContext } from './Theme'

export const SecChild = () =>{
const theme=useContext(ThemeContext)

    return(
<p>sec child{theme}</p>
    )
}
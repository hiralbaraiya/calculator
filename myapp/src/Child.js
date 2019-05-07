import React, { Component } from 'react'
import { ThemeContext } from './Theme'

class Child extends Component {
    render() {
        return (
            
               <p>child {this.context}</p>
        
        )
    }
}
Child.contextType=ThemeContext
export default Child
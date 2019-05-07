import React, {  useState } from 'react';
import './App.css';
// import {ReactReduxContext} from 'react-redux'
import {connect} from 'react-redux';
// import {New} from './New'


 const App = (props) => {
   console.log(props)
return(
  <div>hello</div>
)  

}
export default connect((store)=>{return {a:store}})(App)
  




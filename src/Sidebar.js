import React, { Component } from 'react'
import orderlist from './data.json'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


class Sidebar extends Component {

  componentWillMount() {
    this.props.dispatch({ type: 'STORE', payload: orderlist })
  }

  render() {
    let list = this.props.orderlist
    return (
      <div className='sidebar'>
        
       {list && list.map((element) => {
          return <div key={element.id} >
            <NavLink to={`/order/${element.id}`}>{
              element.id
            }
            </NavLink>
          </div>
        })}

      </div>
    )
  }
}

export default connect((state) => { return state })(Sidebar)

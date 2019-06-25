import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

function Order(props) {
  const [state, setstate] = useState(false)
  let timer

  useEffect(() => {
    console.log('effect')
    timer = setTimeout(() => {
      alert('please do something')
      setstate(!state)
    }, 180000);
  }, [state, props.match.params.id])

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    };
  })

  let order = props.orderlist[props.match.params.id - 1]

  return (
    
    <div className='order'>
      {
        order ? <div>
          <h1>
            {order.createdBy}
          </h1>
          <h3>{order.createdAt}</h3>
        </div> :
          <p>please selecet any order</p>
      }
    </div>
  )
}
export default connect((state) => { return state })(Order)
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

function Dashboard() {
  const [state, setstate] = useState(false)
  let timer

  useEffect(() => {
    timer = setTimeout(() => {
      alert('hello')
      setstate(!state)
    }, 180000);
  }, [state])

  useEffect(() => {
    return () => {
      clearTimeout(timer)
    };
  })
  return (
    <div>
      Dashboard
        </div>
  )
}

export default connect()(Dashboard)
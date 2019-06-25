import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Link to='/order'>go to orders</Link>
        </div>
    )
}

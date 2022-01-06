import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section className='error-container '>
            <h1 className='section-title'>404...!!!!!!! PAGE NOT FOUND</h1>
            <Link to="/" className='btn'>Go Back</Link>
        </section>
    )
}

export default Error

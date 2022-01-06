import React from 'react'
import { useState } from 'react'

const Searchform = ({getSearch}) => {
    
    console.log(getSearch)


    const[ser,setser]=useState();
    const search=(e)=>{
        e.preventDefault();
        
       return  getSearch(ser);
        console.log(ser)

    }
        
    return (
        <div className='section about-section'>
           <input type="text" className="btns" onChange={e=>{setser(e.target.value)}}></input>
           <button className="btn" onClick={search}>Search</button>
        </div>
    )
}

export default Searchform

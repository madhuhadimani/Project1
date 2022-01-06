import React, { useState } from 'react'
import Details from "./details"
import Question from './Question'

const Questions = () => {
    const[data,setData]=useState(Details)
    console.log(data);

    return (
        <div>
            {
                Details.map((val)=>{
                  return  <div className="head"><Question {...val}/></div>

                })
                

            }
            
            
        </div>
    )
}

export default Questions

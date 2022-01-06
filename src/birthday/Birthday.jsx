import React, { useState } from 'react'
import "../index.css"
import data from "./Constants"
import List from "./List"

const Birthday = () => {

    const[people,getPeople]=useState(data);
    console.log(data);
    const {name,age,country,image}=people;
    const submit=()=>{
        getPeople([]);

    }
    return (
        <>
        <div className="Main">
            <h3 style={{color:'white',marginLeft:"50%"}}>{data.length} Birthday's today</h3>
            <List people={people}/>
    
            <button onClick={submit}> Clearall</button>
        </div>
        </>
    )
}

export default Birthday

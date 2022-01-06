import React, { useState } from 'react'

const Test = () => {
    const[name,setName]=useState();
    const [age,setAge]=useState();
    const[det,setdet]=useState();
    const onSubmit=()=>{
        const details={'fname':name,
                        'age':age}
                        console.log(details)
        if(name && age)
        {
        alert(`${name} ${age}`)
        setdet(details)
        }
        else 
        alert("enter details");
    }
    return (
        <div>
         <h1>Test page</h1>
         <input type="text"  placeholder='Enter Name' onChange={e=>{setName(e.target.value)} }/><br/>
         <input type="text"  placeholder='Enter Age' onChange={e=>{setAge(e.target.value)} }/><br/>
         <h1>{det}</h1>
         <input type="button" value="Click" onClick={onSubmit}/>

            
        </div>
    )
}

export default Test;



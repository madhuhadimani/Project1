import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Question = ({title,info}) => {
    const[max,setMax]=useState(false);
    
    return (
        <div className="main">

            <header className="mad">

            <h4>{title}</h4>
            <button onClick={()=>setMax(!max)}>{ !max ? <AddIcon/> : <RemoveIcon/>}</button>
            </header>
            {max && <p>{info}</p>}
            
            
        </div>
    )
}

export default Question

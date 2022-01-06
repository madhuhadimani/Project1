import React from 'react'

const Categories = ({allCategories,cat}) => {
    return (
        <div className="buttons">
           {
               allCategories.map((btn)=>{
                   return <div >
                       <button onClick={()=>cat(btn)}>{btn}

                   </button>
                   </div>

               })
           } 
            
        </div>
    )
}

export default Categories


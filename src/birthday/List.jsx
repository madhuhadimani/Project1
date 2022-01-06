import React from 'react'

const List = ({ people }) => {

   


    return (
        <>
    
        {
            people.map((val)=>{
                const {name,age,country,image}=val;
                return <div className="Container">
                    <div className="pic">
                 <img src={image} alt={name}/>
                 </div>
                 <div className="details">
                     <h4>Name:{name}</h4>
                     <h5>Age:{age}</h5>

                 </div>
                 </div>
            })
               
        }

        </>
        );
}
        
    


export default List;
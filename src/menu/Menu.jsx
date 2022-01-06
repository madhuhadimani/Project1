import React, { useState } from 'react'

const Menu = ({items}) => {
    const[toogle,setToogle]=useState(true)
    return (
        <div className="section-centre">
            {
                items.map((menuItem)=>{
                    const {id,title,img,desc,price}=menuItem;
                    return <article>
                        <img src={img} className='photo'/>
                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h5>Price :${price}</h5>
                               
                            </header>
                            {/* <button onClick={()=>setToogle(!toogle)}>-</button> */}
                            {toogle && <p>{desc}</p>}
                            

                        </div>
                    </article>

                })

            }

            
        </div>
    )
}

export default Menu

import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Tour from "./Tour";

const Tours = ({datas}) => {
    

    return <>
           
              
            <h3>tours page</h3>
            <h3>{datas.length}</h3>
            <Tour datas={datas}/>
            
        
    </>

    
};

export default Tours;

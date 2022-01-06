import {React,useEffect,useState} from 'react'
import axios from "axios"
import Searchform from "./Searchform"

const Cocklist = () => {
    const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    const[cocktail,getCocktail]=useState([]);
    const[search,getSearch]=useState('a')
    
    useEffect(()=>{
        getData();

    },[])
    async function getData(){
        const res=await axios.get(`${url}${search}`)
        const{drinks}=res.data; 
        getCocktail(drinks)
    }
   
    console.log(cocktail);
    return (
        <div className='cocktails-center'>
            {
            cocktail.map((item)=>{
                const {idDrink,strAlcoholic,strCategory,strDrinkThumb,strDrink}=item;
                return <section>
                    <img src={strDrinkThumb}/>
                    <h1>{strDrink}</h1>
                    <h3>{strCategory}</h3>
                    <h5>{strAlcoholic}</h5>
                    
                    </section>
                   

            }
            )
            
        }
         <Searchform getSearch={getSearch}/>
            
        </div>
    )
}

export default Cocklist

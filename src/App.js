import React from 'react'
import Navbar from "./cocktails/components/Navbar"
import Home from "./cocktails/pages/Home"
import About from "./cocktails/pages/About"
import Singlecocktail from "./cocktails/pages/Singlecocktail"
import Error from "./cocktails/pages/Error"
import { Router,Route ,Switch,Routes} from 'react-router-dom'

const App = () => {
  return (<>
   <Navbar/>
    <Routes>
     
      <Route exact path="/" element={<Home/>}/>
      <Route   path="/about"  element={<About/>}/>
      <Route   path="/cocktail/:id" element={<Singlecocktail/>}/>
      <Route   path="*" element={<Error/>}/>
      </Routes>
    
      </>)
}

export default App

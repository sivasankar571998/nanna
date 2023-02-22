import React,{useState,createContext} from 'react'
import ComponentA from './component/A.js'
import ComponentB from './component/B.js'
//import axios from 'axios'
export  const store = createContext();
const App = () => {
  
  const [data,setData] = useState([
    {
      brandname: "nokia"
    },
    {
      brandname: "airtel"
    },
    {
      brandname: "jio"
    }
  ])
  
  
  //console.log(name)
  return(
    <store.Provider value={[data,setData]}>
    <center>
     <ComponentA/>
     <ComponentB/>
     
        
    </center>
    </store.Provider>
  )
}
export default App
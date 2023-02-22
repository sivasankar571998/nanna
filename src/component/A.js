import React,{useContext,useState} from 'react'
import {store} from '../App'
const ComponentA = () => {
    const [data,setData] = useContext(store)
    
    return(
        <>
        <div className="card">
            <div className="card-body">
            <h1>Count : {data.length}</h1>
            </div>
        </div>
        
        </>
    )
}
export default ComponentA
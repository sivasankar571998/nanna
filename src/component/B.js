import React,{useContext,useState} from 'react'
import {store} from '../App'
const ComponentB = () => {
    const [data,setData] = useContext(store)
    const [name,setName] = useState("")

    //console.log(name)
    const onSubmit = e  => {
        e.preventDefault()
        setData([...data,{brandname: name}]);
      }
    return(
        <>
        <div className="card">
            <div className="card-body">
            {data.map(each=> <h1>{each.brandname}</h1>)}
            </div>
            <form className="form" onSubmit={onSubmit}>
            <input type="text" onChange={(e)=> setName(e.target.value)}/>
            <input type="submit"/>
        </form>
        </div>
      
        </>
    )
}
export default ComponentB
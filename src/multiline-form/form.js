import React,{useState} from 'react'
import Signup from '../multiline-form/conponents/signup.js'
import PersonalInfo from '../multiline-form/conponents/personalInfo.js'
import OtherInfo from '../multiline-form/conponents/otherInfo.js'
function Form() {
 const [page,setPage] = useState(0)
 const [data,setData] = useState({
    name: "",
    email: "",
    password: "",
    c_password: "",
    firstname: "",
    lastname: "",
    username: "",
    nationality: "",
    others: ""
 })
 const formTitle = ["Signup","Personal Info","Others"];

const pageDisplay = () => {
    if(page === 0){
        return <Signup data={data} setData={setData}/>
    }else if(page === 1){
        return <PersonalInfo data={data} setData={setData}/>
    }else {
        return <OtherInfo data={data} setData={setData}/>
    }
}
const submit = (e) => {
e.preventDefault();
//console.log(data)
}
  return (
    <div className="mt-5">
        <div className='progressbar'>
            <div style={{width: page===0 ? "33.3%" : page===1 ? "66.6%" : "100%",backgroundColor: "blue"}}></div>
        </div>
        <div className="form-container">
        <div className="header text-center text-white">
            <h1>{formTitle[page]}</h1>
        </div>
        <form onSubmit={submit}>
        <div className="body">
            {pageDisplay()}
        </div>
        <div className="footer text-center mt-3">
            <button disabled={page === 0} className="btn btn-warning m-2" onClick={() =>setPage((curr)=> curr-1)}>Prev</button>
            <button className="btn btn-secondary m-2" onClick={() =>{
                if(page===formTitle.length-1){
                    console.log(data)
                    localStorage.setItem("name", JSON.stringify(data))
                }else{
                    setPage((curr)=> curr+1)
                }
                }}>{page ===2 ? "Submit": "Next"}</button>
        </div>
        </form>
        </div>
    </div>
  )
}

export default Form
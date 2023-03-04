import React from 'react'

function Signup({data,setData}) {
  return (
    <div className="container text-center" style={{width: "350px"}}>
        <div className="row">
            <div className="col">
                <input type="text" placeholder="Enter Name"  className="form-control" onChange={(e)=>setData({...data, name: e.target.value})} value={data.name}/>
                <input type="email" placeholder="Enter Email" className="form-control mt-4" onChange={(e) => setData({...data, email: e.target.value})} value={data.email}/> 
                <input type="password" placeholder="Enter Password" className="form-control mt-4" onChange={(e) => setData({...data, password: e.target.value})} value={data.password}/>
                <input type="password" placeholder="Enter Confirm Password" className="form-control mt-4" onChange={(e) => setData({...data, c_password: e.target.value})} value={data.c_password}/>
            </div>
        </div>
    </div>
  )
}

export default Signup
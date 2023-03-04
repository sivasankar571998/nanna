import React from 'react'

function PersonalInfo({data,setData}) {
  return (
    <div className="container text-center" style={{width: "350px"}}>
        <div className="row">
            <div className="col">
                <input type="text" placeholder="Enter FirstName" className="form-control" onChange={(e) => setData({...data, firstname: e.target.value})} value={data.firstname}/>
                <input type="text" placeholder="Enter LastName" className="form-control mt-4" onChange={(e) => setData({...data, lastname: e.target.value})} value={data.lastname}/>
                <input type="text" placeholder="Enter UserName" className="form-control mt-4" onChange={(e) => setData({...data, username: e.target.value})} value={data.username}/>
                
            </div>
        </div>
    </div>
  )
}

export default PersonalInfo
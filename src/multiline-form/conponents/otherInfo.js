import React from 'react'

function OtherInfo({data,setData}) {
  return (
    <div className="container text-center" style={{width: "350px"}}>
        <div className="row">
            <div className="col">
                <input type="text" placeholder="Enter Nationality" className="form-control" onChange={(e) => setData({...data, nationality: e.target.value})} value={data.nationality}/>
                <input type="text" placeholder="Enter others" className="form-control mt-4" onChange={(e) => setData({...data, others: e.target.value})} value={data.others}/>
                
            </div>
        </div>
    </div>
  )
}

export default OtherInfo
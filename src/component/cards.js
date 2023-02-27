import React from 'react'

function Cards() {
  return (
    <div className="bg-dark">
    <div className="container mt-3">
        <div className="row">
            <div className="col d-flex flex-row justify-content-between">
               <div><h3 className="text-white">COMPANY LOGO</h3></div> 
                <div className="mt-3"><button className="btn btn-primary">BECOME A MEMBER</button></div>
            </div>
            <div className="row">
                <div className="col">
                    <h4 className="text-white">Join Fast&Up Club To Avail Unlimited Offers and Benifits</h4>
                </div>
            </div>
            <div className="row">
                <div className="col bg-light-dark text-white shadow">one</div>
                <div className="col text-white">two</div>
                <div className="col text-white">three</div>
                <div className="col text-white">four</div>
                <div className="col text-white">five</div>
                <div className="col text-white">six</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cards
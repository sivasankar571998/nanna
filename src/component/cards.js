import React from 'react'
//import {logo} from './image/siva.jpg'
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
                    <div className="row mb-5 d-flex justify-content-center">
                        <div className="col-lg-2 col-md-6 mt-2">
                            <div class="card bg-success text-white">

                                <div class="card-body">
                                    <i class="fa-sharp fa-solid fa-truck"></i>
                                    <h5 class="card-title">Free Shipping + Prioritized Delivery</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-2">
                            <div class="card bg-success text-white">

                                <div class="card-body">
                                    <i class="fa-sharp fa-solid fa-tag"></i>
                                    <h5 class="card-title">Upto 5% Extra Discount</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-2">
                            <div class="card bg-success text-white">

                                <div class="card-body">
                                    <i class="fa-sharp fa-solid fa-square-dashed"></i>
                                    <h5 class="card-title">Earn more Puf Coins & More</h5>
                                    <p class="card-text">Some quick these are example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-2">
                            <div class="card bg-success text-white">

                                <div class="card-body">
                                    <i class="fa-sharp fa-solid fa-message-check"></i>
                                    <h5 class="card-title">Early Acess to Bid Sale Day</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mt-2">
                            <div class="card bg-success text-white">

                                <div class="card-body">
                                    <i class="fa-sharp fa-solid fa-user"></i>
                                    <h5 class="card-title">12 Free Nutrition Consolutation</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
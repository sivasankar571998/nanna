import React from 'react'
import './nav.css'
function Nav() {
    return (
        <div className="bg-dark nav-hei">
            <div className="p-3">
                <div className="row d-flex flex-row justify-content-around">
                    <div className="col-lg-2 col-xs-2 text-white d-md-none d-sm-none d-lg-block d-xs-none haha"><h4>COMPANY LOGO</h4></div>
                    <div className="d-lg-none d-xs-none d-md-block pt-5 va">
            
                    <i class="fa-sharp fa-solid fa-bars text-white na "></i>
                    <i class="fa-sharp fa-solid fa-magnifying-glass text-white na ia"></i>

                    </div>
                    <div className=" col-xs-8 text-white text-center">
                        <div>
                            <div class="input-group row ml-3">
                                <div class="input-group keka">
                                    <div className="d-lg-block d-sm-none d-md-none">
                                    <div class="form-outline d-flex flex-row ">
                                        <input type="search" id="form1" class="form-control" />
                                        <button type="button" class="btn btn-primary">
                                        <i class="fas fa-search"></i>
                                    </button>
                                    </div>
                                    
                                    </div>
                                    <div className=" d-md-block d-lg-none  ">
                                        <h4 className="haha d-flex align-items-center justify-content-center">COMPANY LOGO</h4>
                                    </div>
                                </div>
                                <div className="d-flex flex-row justify-content-around">
                                    <nav class="navbar navbar-expand-lg ml-3 d-lg-block d-md-none ">

                                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarNav ">
                                            <ul class="navbar-nav d-flex flex-row justify-content-between">
                                                <div><li class="nav-item active mr-3">
                                                    <a class="nav-link mr-5 text-white" href="#">Categeories <span class="sr-only">(current)</span></a>
                                                </li></div>
                                                <div>
                                                    <li class="nav-item mr-3">
                                                        <a class="nav-link text-white" href="#">Goals</a>
                                                    </li>
                                                </div>
                                                <div>
                                                    <li class="nav-item mr-3">
                                                        <a class="nav-link text-white" href="#">Offers</a>
                                                    </li>
                                                </div>
                                                <div>
                                                    <li class="nav-item mr-3">
                                                        <a class="nav-link text-white" href="#">Good Eatz</a>
                                                    </li>
                                                </div>
                                                <div>
                                                    <li class="nav-item">
                                                        <a class="nav-link text-white" href="#">Fast&Up Club</a>
                                                    </li>
                                                </div>
                                                <div>
                                                    <li class="nav-item mr-3">
                                                        <a class="nav-link text-white" href="#">Fast&Up World</a>
                                                    </li>
                                                </div>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-xs-2 text-white d-flex justify-content-around mt-2 lal aligin-items-center pt-3">
                        <i class="fa-solid fa-heart na d-sm-none d-lg-block keka"></i>
                        <i class="fa-regular fa-user text-white na"></i>
                        <i class="fa-solid fa-cart-shopping text-white na"><sup className="ka">0</sup></i>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
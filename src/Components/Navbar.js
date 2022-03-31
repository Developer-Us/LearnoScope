import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
import { useEffect } from 'react';


export default function Navbar() {
    useEffect(() => {
        let windowWidth = window.matchMedia("(max-width: 430px)");
        if (windowWidth.matches) {
          document.getElementById("LeftBarTogglerIcon").innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-three-dots-vertical left_bar_btn" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>`;
          document.getElementById("SearchIcon").innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>`;
          document.getElementById("ModeIcon").innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
      </svg>`;
          document.getElementById("UserDashBoard").innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" style={{"cursor":"pointer"}} onClick={toggleProfileOption} width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
      </svg>`;
        document.getElementById("AppName").className="App_Name mx-1"
        }
      });

const toggleProfileOption = ()=>{
    if(document.getElementById("profileDropdown").style.display === "none"){
        document.getElementById("profileDropdown").style.display = "block";
    }
    else{
        document.getElementById("profileDropdown").style.display = "none";
    }
}

    return (
        <div>
            <nav id="Navbar" className="navbar navbar-expand-lg navbar-light navbar-custom" >
                <div className="container-fluid">
                    <button id="LeftBarTogglerIcon" className="btn btn-outline-dark p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">
                        {/* LeftBarToggler  */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-three-dots-vertical left_bar_btn" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                    </button>
                 

                    <Link className="navbar-brand mx-2" to="/videoFeed">
                        <img src="Logo/logo.png" alt="Logo" height="40px" />
                        <span className='App_Name mx-3' id='AppName'>LearnoScope</span>
                    </Link>

                    <div className="justify-content-center" id="navbarSupportedContent">
                        <form className="d-flex ">
                            {/* Search Bar */}
                            <input className="Search_Bar form-control-customize me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button id="SearchIcon" className="btn btn-outline-dark p-2" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </form>
                    </div>

                    <div className="mx-2" id='ModeIcon'>
                        {/* Dark mode /Light mode */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                        </svg>
                    </div>


 {/* user Dashboard/menu */}
                    <div className="mx-2" id='UserDashBoard'>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{"cursor":"pointer"}} onClick={toggleProfileOption} width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>

                        <div id="profileDropdown" className="card my-2 shadow p-3 mb-5 bg-body" style={{"width": "10rem","position":"absolute","zIndex":5,"right":11 ,"display":"none"}}>
                                <div className="card-body">
                                   <p className="userProfileOptions">Login</p>
                                   <p className="userProfileOptions">Signup</p>
                                </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
